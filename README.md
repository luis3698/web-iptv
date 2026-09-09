# Página de descargas de IPTV System

Sitio estático de una sola página desde el que se descargan las tres
aplicaciones de **IPTV System**: el reproductor para Windows, la aplicación para
televisores con Google TV y el mando a distancia para Android.

**🔗 Sitio publicado:** <https://luis3698.github.io/web-iptv/>

```
HTML + CSS + JavaScript sin dependencias · bilingüe ES/EN · tema oscuro
```

> [!NOTE]
> El código fuente de las aplicaciones está en el repositorio
> [**luis3698/iptv**](https://github.com/luis3698/iptv). Este repositorio
> contiene únicamente la página de descargas y los binarios que sirve.

## Qué contiene

| Ruta | Qué es |
|---|---|
| `index.html` | La página completa: portada, descargas, características y pie |
| `assets/css/styles.css` | Estilos, incluido el tema oscuro |
| `assets/js/i18n.js` | Traducción español / inglés en el propio navegador |
| `assets/js/main.js` | Interacciones de la página |
| `assets/img/` | Icono de la aplicación, favicons e imagen de vista previa |
| `downloads/` | Los instaladores que la página ofrece |
| `sync-downloads.ps1` | Actualiza los instaladores y su tabla de descargas |

## Descargas que publica

| Archivo | Plataforma |
|---|---|
| `IPTV-Desktop-Setup-1.0.0.exe` | Windows 10/11 (64 bits) |
| `IPTV-TV-1.0.0.apk` | Android TV / Google TV 8.0+ |
| `IPTV-Remote-1.0.0.apk` | Android 8.0+ |

## Actualizar los instaladores

La página muestra el **tamaño y la huella SHA-256** de cada archivo escritos
directamente en el HTML: un sitio estático no puede calcularlos solo, y una
huella equivocada es peor que no publicar ninguna, porque quien la comprueba
concluye que el archivo está manipulado.

`sync-downloads.ps1` automatiza ese trabajo: copia los binarios, recalcula
tamaños y huellas, y reescribe las celdas correspondientes de `index.html`.

```powershell
powershell -ExecutionPolicy Bypass -File sync-downloads.ps1 -Source "RUTA\A\dist"
```

> [!IMPORTANT]
> El parámetro `-Source` es obligatorio aquí. El script está escrito para la
> estructura del repositorio `iptv`, donde vive en `web/` y encuentra los
> binarios solos en `../dist`. En este repositorio la página está en la raíz,
> así que hay que indicarle dónde están los instaladores compilados.

## Publicación

El sitio se publica con **GitHub Pages** desde la rama `main`. Cada push
actualiza <https://luis3698.github.io/web-iptv/>.

## Autor

**Luis Gerardo Mancilla** — Ingeniero de Sistemas
[Portafolio](https://luis3698.github.io/responsive-personal-portfolio/) ·
[LinkedIn](https://www.linkedin.com/in/luis-mancilla-750327374/) ·
[GitHub](https://github.com/luis3698)
