// an example to create a new mapping `ctrl-y`
api.mapkey('<ctrl-y>', 'Show me the money', function() {
    api.Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});

settings.blocklistPattern = /monkeytype\.com/;

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
api.map('gt', 'T');

// an example to remove mapkey `Ctrl-i`
api.unmap('<ctrl-i>');

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;

// --- Estilos de Hints y Visual basados en Foldex (Cyberpunk Neon) ---
const hintStyle = 'border: solid 2px #00f5ff !important; color: #00f5ff !important; background: initial !important; background-color: #0d0211 !important; box-shadow: 0px 0px 8px #00f5ff !important; text-shadow: 0px 0px 2px #00f5ff !important; font-family: monospace !important;';
const textHintStyle = 'border: solid 2px #ff007f !important; color: #ff007f !important; background: initial !important; background-color: #0d0211 !important; box-shadow: 0px 0px 8px #ff007f !important; text-shadow: 0px 0px 2px #ff007f !important; font-family: monospace !important;';

if (typeof api !== "undefined" && api.Hints) {
    api.Hints.style(hintStyle);
    api.Hints.style(textHintStyle, "text");
    if (api.Visual) {
        api.Visual.style('marks', 'background-color: #00f5ff99 !important;');
        api.Visual.style('cursor', 'background-color: #ff007f !important;');
    }
} else {
    if (typeof Hints !== "undefined") {
        Hints.style(hintStyle);
        Hints.style(textHintStyle, "text");
    }
    if (typeof Visual !== "undefined") {
        Visual.style('marks', 'background-color: #00f5ff99 !important;');
        Visual.style('cursor', 'background-color: #ff007f !important;');
    }
}
