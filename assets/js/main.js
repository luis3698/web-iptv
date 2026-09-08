/* ==========================================================================
   IPTV System — comportamiento de la página
   --------------------------------------------------------------------------
   Tres cosas, y ninguna imprescindible para leer la página: el cambio de
   idioma, la aparición suave de las secciones y el resaltado del apartado
   activo en la navegación. Si el JavaScript no se ejecuta, la página se ve
   entera en español y todas las descargas funcionan.
   ========================================================================== */

(function () {
    "use strict";

    /* ------------------------------------------------------------ idioma */

    var STORAGE_KEY = "iptv-lang";
    var DEFAULT_LANG = "es";

    // El catálogo español no está en un diccionario: es lo que hay escrito en
    // el HTML. Se guarda al arrancar, antes de tocar nada.
    var ES = {};

    function collectSpanish() {
        document.querySelectorAll("[data-i18n]").forEach(function (node) {
            ES[node.getAttribute("data-i18n")] = node.textContent;
        });
        document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
            ES[node.getAttribute("data-i18n-html")] = node.innerHTML;
        });
        ES["doc.title"] = document.title;
        var description = document.querySelector('meta[name="description"]');
        ES["doc.description"] = description ? description.getAttribute("content") : "";
    }

    function apply(lang) {
        var dict = lang === "en" ? (window.I18N_EN || {}) : ES;

        document.querySelectorAll("[data-i18n]").forEach(function (node) {
            var value = dict[node.getAttribute("data-i18n")];
            if (typeof value === "string") node.textContent = value;
        });
        document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
            var value = dict[node.getAttribute("data-i18n-html")];
            if (typeof value === "string") node.innerHTML = value;
        });

        if (dict["doc.title"]) document.title = dict["doc.title"];
        var description = document.querySelector('meta[name="description"]');
        if (description && dict["doc.description"]) {
            description.setAttribute("content", dict["doc.description"]);
        }

        document.documentElement.lang = lang;
        document.querySelectorAll(".lang button").forEach(function (button) {
            button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
        });

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            // Navegación privada o almacenamiento bloqueado: el idioma
            // simplemente no se recuerda entre visitas. No es motivo para
            // dejar la página a medio traducir.
        }
    }

    function preferredLanguage() {
        var stored = null;
        try {
            stored = localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            stored = null;
        }
        if (stored === "es" || stored === "en") return stored;
        // Sin elección previa manda el idioma del navegador, con el español
        // como puerta de entrada porque es el idioma del producto.
        var navigatorLang = (navigator.language || "es").slice(0, 2).toLowerCase();
        return navigatorLang === "es" ? "es" : "en";
    }

    /* ------------------------------------------------- aparición al bajar */

    function setupReveal() {
        var nodes = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window)) {
            // Sin observador, todo visible desde el principio: es preferible a
            // dejar secciones invisibles para siempre.
            nodes.forEach(function (node) { node.classList.add("is-visible"); });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

        nodes.forEach(function (node) { observer.observe(node); });
    }

    /* ------------------------------------------- apartado activo del menú */

    function setupActiveSection() {
        var links = Array.prototype.slice.call(document.querySelectorAll(".nav a[href^='#']"));
        if (!links.length || !("IntersectionObserver" in window)) return;

        var sections = links
            .map(function (link) { return document.querySelector(link.getAttribute("href")); })
            .filter(Boolean);

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                links.forEach(function (link) {
                    var active = link.getAttribute("href") === "#" + entry.target.id;
                    link.style.color = active ? "var(--text)" : "";
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });

        sections.forEach(function (section) { observer.observe(section); });
    }

    /* ------------------------------------------------------------ arranque */

    document.addEventListener("DOMContentLoaded", function () {
        collectSpanish();
        apply(preferredLanguage());

        document.querySelectorAll(".lang button").forEach(function (button) {
            button.addEventListener("click", function () {
                apply(button.dataset.lang);
            });
        });

        setupReveal();
        setupActiveSection();
    });
})();
