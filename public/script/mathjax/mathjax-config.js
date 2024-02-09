// configuration is taken from 'https://www.leifiphysik.de/themes/custom/avonis/js/mathjax-config.js?s0e9g7'
// color.js doesn't work correctly, we actually need colorv2...
// https://docs.mathjax.org/en/latest/input/tex/extensions/colorv2.html#tex-colorv2
// but the snippet from the docs doesn't work, because it replaces colorv2 with the default 'color', but default 'color' doesn't work (that's why we have hardcoded paths)
// later edit: for some reason, it works if we don't include it at all in the configuration. leaving it commented in case something is still wrong
window.MathJax = {
    chtml: {
        fontURL: '/script/mathjax/output/chtml/fonts',
    },
    // loader: {
    //     load: ['/script/mathjax/input/tex/extensions/colorv2'],
    // },
    tex: {
        autoload: {
            mhchem: ['/script/mathjax/input/tex/extensions/mhchem'],
            // color: ['/script/mathjax/input/tex/extensions/color.js'],
            cancel: ['/script/mathjax/input/tex/extensions/cancel'],
            enclose: ['/script/mathjax/input/tex/extensions/enclose'],
        },
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)'],
        ],
        // packages: {
        //     '[+]': ['color'],
        // },
    },
};
