export function startMathJax() {
    const mathjax = window.MathJax;

    if (!mathjax || !mathjax.startup) {
        return;
    }

    mathjax.startup.defaultPageReady();
}
