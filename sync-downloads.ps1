<#
    sync-downloads.ps1
    ==================
    Copia los instaladores compilados a `web/downloads/` y pone al día la tabla
    de descargas de `index.html`: tamaño y huella SHA-256 de cada archivo.

    Por qué existe
    --------------
    Los tamaños y las huellas están escritos en el HTML porque una página
    estática no puede calcularlos sola, y una huella equivocada es peor que no
    publicar ninguna: quien la comprueba concluye que el archivo está
    manipulado. Copiar los binarios a mano y actualizar seis celdas a mano es
    justo la clase de tarea en la que uno se olvida de una.

    Uso
    ---
        powershell -ExecutionPolicy Bypass -File web/sync-downloads.ps1

    Se ejecuta desde cualquier directorio: las rutas se resuelven a partir de la
    ubicación del propio script.
#>

[CmdletBinding()]
param(
    # Carpeta de la que salen los binarios. Por defecto, `dist/` del proyecto.
    [string] $Source
)

$ErrorActionPreference = 'Stop'

$webRoot     = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $webRoot
if (-not $Source) { $Source = Join-Path $projectRoot 'dist' }
$downloads   = Join-Path $webRoot 'downloads'
$indexPath   = Join-Path $webRoot 'index.html'

if (-not (Test-Path $Source)) {
    throw "No existe la carpeta de origen: $Source. Compila primero los instaladores."
}
if (-not (Test-Path $downloads)) {
    New-Item -ItemType Directory -Path $downloads | Out-Null
}

# Formato español de tamaño: coma decimal y MB, que es como se lee en la página.
function Format-Size([long] $bytes) {
    $mb = $bytes / 1MB
    return ('{0:N1} MB' -f $mb).Replace('.', ',')
}

$html = Get-Content -Path $indexPath -Raw -Encoding UTF8
$updated = 0

# `-Include` sin comodin en la ruta no filtra nada en PowerShell 5.1: se filtra
# por extension, que ademas deja claro que solo entran esos dos formatos.
Get-ChildItem -Path $Source -File | Where-Object { $_.Extension -in '.exe', '.apk' } | ForEach-Object {
    $file = $_
    Copy-Item -Path $file.FullName -Destination (Join-Path $downloads $file.Name) -Force

    $hash = (Get-FileHash -Path $file.FullName -Algorithm SHA256).Hash.ToLower()
    $size = Format-Size $file.Length
    $ext  = $file.Extension.ToLower()

    Write-Host ("{0,-32} {1,10}  {2}" -f $file.Name, $size, $hash)

    # --- fila de la tabla de descargas ---------------------------------- #
    # El ancla es `data-file`, que se escribe una sola vez en el HTML: si la
    # fila cambia de orden o de columnas, esto sigue apuntando a la correcta.
    $rowPattern = '(?s)(<tr data-file="' + [regex]::Escape($file.Name) + '">.*?</tr>)'
    $html = [regex]::Replace($html, $rowPattern, {
        param($match)
        $row = $match.Groups[1].Value
        $row = [regex]::Replace($row, '(<td class="muted small size">)[^<]*(</td>)', "`${1}$size`${2}")
        $row = [regex]::Replace($row, '(<td class="hash">)[^<]*(</td>)', "`${1}$hash`${2}")
        return $row
    })

    # --- botón de la portada -------------------------------------------- #
    $ctaPattern = '(?s)(<a class="btn[^"]*" href="downloads/' + [regex]::Escape($file.Name) + '" download>.*?<span class="btn__meta">)[^<]*(</span>)'
    $html = [regex]::Replace($html, $ctaPattern, "`${1}$ext · $size`${2}")

    $updated++
}

if ($updated -eq 0) {
    Write-Warning "No se encontró ningún .exe ni .apk en $Source."
} else {
    # `Set-Content -Encoding UTF8` escribe siempre BOM en PowerShell 5.1, y un
    # BOM en un HTML es basura al principio del documento. Se escribe con un
    # codificador UTF-8 sin firma.
    [System.IO.File]::WriteAllText($indexPath, $html, (New-Object System.Text.UTF8Encoding($false)))
    Write-Host ""
    Write-Host "$updated archivo(s) copiados a web/downloads y anotados en index.html." -ForegroundColor Green
}
