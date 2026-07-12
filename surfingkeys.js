// Configuración de Surfingkeys (Solo diseño de Hints)

const hintCSS = `
    background: #0d0211 !important;
    background-color: #0d0211 !important;
    background-image: none !important;
    color: #00f5ff !important;
    border: 2px solid #00f5ff !important;
    font-weight: bold !important;
    font-size: 13px !important;
    font-family: monospace !important;
    box-shadow: 0px 0px 8px #00f5ff !important;
    text-shadow: 0px 0px 2px #00f5ff !important;
    border-radius: 4px !important;
    padding: 2px 6px !important;
`;

// 1. Intentar aplicar usando las APIs de JavaScript (para Shadow DOM y herencia)
try {
    if (typeof api !== "undefined" && api.Hints && api.Hints.style) {
        api.Hints.style(hintCSS, "hint");
        api.Hints.style(hintCSS, "text");
    }
} catch (e) {}

try {
    if (typeof Hints !== "undefined" && Hints.style) {
        Hints.style(hintCSS, "hint");
        Hints.style(hintCSS, "text");
    }
} catch (e) {}

// 2. Intentar aplicar usando settings.theme (por si se renderiza en el DOM global del plugin)
try {
    settings.theme = `
        #sk_hints > div {
            background: #0d0211 !important;
            background-color: #0d0211 !important;
            background-image: none !important;
            color: #00f5ff !important;
            border: 2px solid #00f5ff !important;
            font-weight: bold !important;
            font-size: 13px !important;
            font-family: monospace !important;
            box-shadow: 0px 0px 8px #00f5ff !important;
            text-shadow: 0px 0px 2px #00f5ff !important;
            border-radius: 4px !important;
            padding: 2px 6px !important;
        }
        #sk_hints > div.begin {
            color: #ff007f !important;
            text-shadow: 0px 0px 2px #ff007f !important;
        }
    `;
} catch (e) {}
