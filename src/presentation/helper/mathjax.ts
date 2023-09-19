/*
 configuration is taken from 'https://www.leifiphysik.de/themes/custom/avonis/js/mathjax-config.js?s0e9g7'
 - instead of the 'tex-mml-chtml' the 'tex-mml-svg' is used displaying the rendered functions as svg not with css & html causing errors by including fonts
 - the config for loader is removed and all the extensions are imported separately, otherwise causing errors
 */

/* eslint-disable */
export const getMathjax = async () => {
    // @ts-ignore
    await import('@/presentation/script/mathjax@3/mathjax-config.js');

    // @ts-ignore
    await import('mathjax/es5/tex-mml-svg.js');

    // @ts-ignore
    import('mathjax/es5/input/tex/extensions/enclose.js');

    // @ts-ignore
    import('mathjax/es5/input/tex/extensions/cancel.js');

    // @ts-ignore
    import('mathjax/es5/input/tex/extensions/color.js');

    // @ts-ignore
    import('mathjax/es5/input/tex/extensions/mhchem.js');
};
