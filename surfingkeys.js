// Configuración minimalista para Surfingkeys (Solo estilo de Hints)

const hintStyle = "background: #0d0211 !important; color: #00f5ff !important; border: 2px solid #00f5ff !important; font-weight: bold; font-size: 13px; font-family: monospace; box-shadow: 0px 0px 8px #00f5ff !important; text-shadow: 0px 0px 2px #00f5ff !important;";

if (typeof api !== "undefined" && api.Hints) {
    api.Hints.style(hintStyle);
} else {
    Hints.style(hintStyle);
}
