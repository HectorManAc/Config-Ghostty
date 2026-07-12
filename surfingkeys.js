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
}`

api.Hints.style("             \
 text-align: center;          \
 vertical-align: middle;      \
 border: 2px solid #303030;   \
 border-radius: 5%;          \
 padding: .2%;                \
 background: #ffffffff;         \
 color: #000000;              \
 font-size:10pt;              \
 font-family: Input Sans Condensed, Charcoal, sans-serif;",
  "hint"
);

// Mapkey 'yc' to copy the text of any selected element on the screen to clipboard
api.mapkey('yc', 'Copy text of a selected element to clipboard', function() {
    api.Hints.create('a, button, [role="button"], p, span, li, h1, h2, h3, h4, h5, h6, input[type="button"], input[type="submit"]', function(element) {
        var text = element.innerText || element.value || element.textContent || '';
        api.Clipboard.write(text.trim());
        api.Front.showPopup('Copied: "' + text.trim().substring(0, 40) + '..."');
    });
});
// click `Save` button to make above settings to take effect.
