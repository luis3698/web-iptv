/* ==========================================================================
   Traducción al inglés.
   --------------------------------------------------------------------------
   El español no se repite aquí: es el que está escrito en el HTML, y main.js
   lo guarda al arrancar. Duplicarlo obligaría a mantener el mismo texto en dos
   sitios, que es exactamente como se desincronizan las traducciones.
   ========================================================================== */

window.I18N_EN = {
    /* --- navegación ------------------------------------------------------ */
    "nav.system": "The system",
    "nav.tv": "Google TV",
    "nav.downloads": "Downloads",
    "nav.install": "Install",
    "nav.faq": "FAQ",
    "cta.download": "Download",

    /* --- portada --------------------------------------------------------- */
    "hero.eyebrow": "Version 1.0.0 · Windows · Android · Google TV",
    "hero.title": "Your IPTV playlists, on the <span class=\"accent\">computer</span>, the <span class=\"accent\">phone</span> and the <span class=\"accent\">TV</span>.",
    "hero.lead": "A player that understands M3U playlists, Xtream Codes accounts and XMLTV guides. It works out on its own what you paste, it is driven from your phone over Wi-Fi, and now it installs on your Google TV as well.",
    "cta.windows": "Windows",
    "cta.tv": "Google TV",
    "cta.mobile": "Android remote",
    "hero.note": "Direct download, no sign-up and no telemetry. It is a player: it does not include or distribute any content.",
    "stats.apps": "apps, one single system",
    "stats.formats": "formats recognised on their own",
    "stats.langs": "language switched without restarting",

    /* --- el sistema ------------------------------------------------------ */
    "system.eyebrow": "One system, three pieces",
    "system.title": "Each screen does what it is good at",
    "system.lead": "The three apps share the same playlist parser, the same guide and the same palette. You can use just one, or all three at once.",

    "system.desktop.title": "IPTV Desktop",
    "system.desktop.text": "The full player. Bundled LibVLC, programme grid, recording, reorderable favourites and a remote-control server.",
    "system.desktop.b1": "LibVLC 3.0.23 included: no need to install VLC",
    "system.desktop.b2": "Channel sweep: tests the list one by one and offers to delete the dead ones",
    "system.desktop.b3": "Recording, snapshots and a saved-links library",
    "system.desktop.cta": "Download installer",

    "system.tv.tag": "New · Android TV 8+",
    "system.tv.title": "IPTV TV",
    "system.tv.text": "The television build. Driven entirely with the D-pad, playing through ExoPlayer, with the guide built in.",
    "system.tv.b1": "Ten-foot interface: visible focus and large type",
    "system.tv.b2": "Channel banner with what is on now and what comes next",
    "system.tv.b3": "Direct jump by number, favourites and recents",
    "system.tv.cta": "Download the TV APK",

    "system.mobile.title": "IPTV Remote",
    "system.mobile.text": "The remote control. Pairs by scanning a QR code and drives the computer from the sofa over the local network.",
    "system.mobile.b1": "QR or manual pairing, with automatic reconnection",
    "system.mobile.b2": "Catalogue with search, categories and favourites",
    "system.mobile.b3": "Remote from the notification shade too",
    "system.mobile.cta": "Download the remote APK",

    /* --- Google TV ------------------------------------------------------- */
    "tv.eyebrow": "New in version 1.0",
    "tv.title": "Now on the television as well",
    "tv.lead": "IPTV TV is a native Android TV app: it shows up in your Google TV app row with its own banner and opens full screen. It is not the desktop player stretched out — it was designed from scratch for a D-pad and to be read from three metres away.",
    "tv.key.channel": "Next and previous channel, within whatever you are browsing",
    "tv.key.left": "Opens the catalogue without covering the picture",
    "tv.key.right": "Opens the programme guide",
    "tv.key.ok": "Shows or hides the channel banner",
    "tv.key.digits": "Jump straight to a channel number",
    "tv.key.menu": "Settings: playlists, guide, picture and language",
    "tv.cta": "Download IPTV TV",
    "tv.cta2": "How to install it",

    /* --- características ------------------------------------------------- */
    "features.eyebrow": "What it does",
    "features.title": "What you expect from an IPTV player, sorted",
    "features.f1.title": "Paste it and you are done",
    "features.f1.text": "It recognises M3U/M3U8 playlists, a whole playlist pasted as text, single channels, Xtream portals, XMLTV guides, link shorteners and pastebins. You never have to pick the type first.",
    "features.f2.title": "Full Xtream Codes",
    "features.f2.text": "Live TV, movies and series with their categories resolved, plus the guide the server itself publishes. Server, username and password is all it takes.",
    "features.f3.title": "Real XMLTV guides",
    "features.f3.text": "Guides compressed as .gz and .zip, with hundreds of thousands of programmes, parsed incrementally. Now, next and the whole day's schedule.",
    "features.f4.title": "Favourites and history",
    "features.f4.text": "Favourites survive a playlist refresh even when positions change. On the desktop they can also be reordered by dragging.",
    "features.f5.title": "When something fails, it says so",
    "features.f5.text": "A dead channel does not sit there black without explanation: you get the actual reason and a button to try again. A stream that freezes is detected and reopened on its own.",
    "features.f6.title": "Bilingual, no reinstall",
    "features.f6.text": "Spanish and English in all three apps, switched from settings without restarting. It does not depend on the system language.",

    /* --- descargas ------------------------------------------------------- */
    "downloads.eyebrow": "Downloads",
    "downloads.title": "Version 1.0.0",
    "downloads.lead": "Direct download. Check the SHA-256 digest if you want to be sure the file is the one published here.",
    "downloads.th.file": "File",
    "downloads.th.req": "Requirements",
    "downloads.th.size": "Size",
    "downloads.th.hash": "SHA-256",
    "downloads.get": "Download",
    "downloads.verify": "To check the digest on Windows: <code>certutil -hashfile IPTV-TV-1.0.0.apk SHA256</code>",

    /* --- instalación ----------------------------------------------------- */
    "install.eyebrow": "Install",
    "install.title": "Getting each piece running",
    "install.tv.title": "On a Google TV television",
    "install.tv.s1": "<strong>Allow unknown apps.</strong> On the TV: Settings → System → About → press «Build» seven times to turn on developer mode, then Settings → Apps → Security &amp; restrictions → Unknown sources.",
    "install.tv.s2": "<strong>Get the APK onto the TV.</strong> With a USB stick, with a sideload app such as <em>Downloader</em> pointed at this file's address, or from the computer with <code>adb install IPTV-TV-1.0.0.apk</code>.",
    "install.tv.s3": "<strong>Open it from the app row.</strong> IPTV TV appears with its own banner. On first run it offers several ready-made playlists: tick the ones you want, or add your own.",
    "install.tv.s4": "<strong>Add your playlist.</strong> MENU → Add playlist, then paste the M3U address or the Xtream portal. The app works out which one it is.",
    "install.pc.title": "On Windows and on the phone",
    "install.pc.s1": "<strong>Run the installer.</strong> The <code>.exe</code> is signed with a self-issued certificate, so Windows may warn you: click «More info» → «Run anyway». It installs the bundled LibVLC and creates the firewall rule.",
    "install.pc.s2": "<strong>Pick your playlists.</strong> On first run the wizard offers several ready-made ones. After that you can paste your own in Preferences → Playlists.",
    "install.pc.s3": "<strong>Install the remote on the phone.</strong> Open the <code>.apk</code> and allow installation from your browser or file manager when Android asks.",
    "install.pc.s4": "<strong>Pair by QR.</strong> On the desktop: Remote menu → Show QR. Scan it with the phone and that is it — both have to be on the same Wi-Fi network.",

    /* --- preguntas ------------------------------------------------------- */
    "faq.eyebrow": "Frequently asked",
    "faq.title": "Before you download",
    "faq.q1": "Does it include channels or paid playlists?",
    "faq.a1": "No. It is a player, just as VLC is. It does not include or distribute any audiovisual content. Playlists, guides and credentials are supplied by the user, who is solely responsible for holding the rights needed to access them. The public playlists offered on first run are third-party catalogues that you can untick or delete.",
    "faq.q2": "Do I need the computer to use the TV app?",
    "faq.a2": "No. IPTV TV stands on its own: it downloads and plays the playlists by itself. The Android remote, on the other hand, does drive the Windows player — that is what it is for.",
    "faq.q3": "Why is the TV APK not on Google Play?",
    "faq.a3": "It is distributed as a direct download. A Google TV set can install apps from outside the store once unknown sources are enabled; the steps are in the install section.",
    "faq.q4": "Does it send data anywhere?",
    "faq.a4": "There is no telemetry, no accounts and no advertising. The only connections the apps open are to the servers of the playlists and guides you add yourself and — in the case of the remote — to the computer on your own local network.",
    "faq.q5": "Do I need VLC installed on the computer?",
    "faq.a5": "No. The Windows installer carries LibVLC 3.0.23 inside, in the 64-bit build it needs. The TV app does not use LibVLC: it plays through ExoPlayer, which is Android's hardware-accelerated engine.",
    "faq.q6": "What if a channel does not play?",
    "faq.a6": "Most of the time that channel's server has stopped answering, which is routine with public playlists. All three apps show the actual reason on screen, and the desktop includes a sweep that tests the whole playlist and offers to delete the dead ones.",

    /* --- aviso legal ----------------------------------------------------- */
    "legal.title": "Important notice",
    "legal.text": "IPTV System is a media player. It does not include, host or distribute any audiovisual content, and it does not facilitate access to any particular source beyond playing the addresses the user enters. The user is solely responsible for holding the rights needed to access whatever they play. The software incorporates LibVLC (LGPL/GPL), PyQt6 (GPL v3), Media3 / ExoPlayer and other components under Apache 2.0; their licences prevail as far as they are concerned.",

    /* --- pie ------------------------------------------------------------- */
    "footer.tag": "Player for Windows, Android and Google TV",
    "footer.downloads": "Downloads",
    "footer.install": "Install",
    "footer.faq": "FAQ",

    /* --- metadatos del documento ----------------------------------------- */
    "doc.title": "IPTV System — Player for Windows, Android and Google TV",
    "doc.description": "IPTV player for Windows with an Android remote control and an app for Google TV televisions. M3U playlists, Xtream Codes and XMLTV guides. Direct download."
};
