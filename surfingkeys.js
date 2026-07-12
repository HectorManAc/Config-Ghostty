// Configuración de Surfingkeys (~/.surfingkeys.js)

// Habilitar tema Cyberpunk Neon
settings.theme = `
.sk_theme {
    font-family: "JetBrains Mono", "Courier New", monospace;
    font-size: 14px;
    background: #0d0211 !important; /* Fondo morado ultra-oscuro */
    color: #00f5ff !important;      /* Texto Cian Neón */
}
.sk_theme kbd {
    background: #12031a !important;
    border: 1px solid #ff007f !important; /* Borde Rosa Neón */
    color: #ff007f !important;
    box-shadow: 0px 0px 4px #ff007f;
}
.sk_theme .sk_theme_highlight {
    background: #00ff66 !important; /* Resaltado Verde Neón */
    color: #0d0211 !important;
}
.sk_theme .sk_theme_cursor {
    border-left: 2px solid #00f5ff !important;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #12031a !important;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #ff007f !important; /* Fondo Rosa Neón en el elemento enfocado */
    color: #0d0211 !important;
}
.sk_theme #sk_omnibarSearchResult ul li.focused .sk_theme_highlight {
    background: #0d0211 !important;
    color: #00ff66 !important;
}
.sk_theme input {
    color: #00f5ff !important;
}
#sk_status, #sk_find {
    font-size: 14px;
    border: 1px solid #ff007f !important;
    background: #0d0211 !important;
    color: #00f5ff !important;
    box-shadow: 0px 0px 8px #ff007f;
}

/* Estilo para las etiquetas de enlaces (Hints - Etiquetas Neón) */
#sk_hints > div {
    background: #0d0211 !important;
    color: #00f5ff !important; /* Texto Cian Neón */
    border: 2px solid #00f5ff !important;
    font-weight: bold;
    font-size: 12px;
    font-family: "JetBrains Mono", "Courier New", monospace;
    padding: 2px 5px !important;
    border-radius: 4px !important;
    box-shadow: 0px 0px 8px #00f5ff !important;
    text-shadow: 0px 0px 2px #00f5ff !important;
}
#sk_hints > div.begin {
    color: #ff007f !important; /* Rosa Neón para la letra inicial */
    text-shadow: 0px 0px 2px #ff007f !important;
}
`;

// Configurar teclas de acceso rápido estándar
api.Hints.setCharacters('asdfgqwertzxcvb');
