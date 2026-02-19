// Position the wavy SVG under "starts here."
document.addEventListener('DOMContentLoaded', () => {
    const underlineWrap = document.querySelector('.underline-wrap');
    const wavySvg = document.getElementById('wavySvg');

    if (underlineWrap && wavySvg) {
        // Move the SVG inside the underline-wrap span
        underlineWrap.appendChild(wavySvg);
    }
});
