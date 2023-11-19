document.addEventListener('mousemove', (m) => {
    const { clientX: x, clientY: y } = m;

    const gopher = document.getElementById('gopher').getBoundingClientRect();
    gX = gopher.left + gopher.width / 2;
    gY = gopher.top + gopher.height / 2;

    angled = angle(x, y, gX, gY);
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${210 + angled}deg)`
    })
});

/**
 * 
 * @param {number} cy mouse y
 * @param {number} cx mouse x
 * @param {number} ey eye y
 * @param {number} ex eye x
 * 
 * @returns number
 */
function angle(cx, cy, ex, ey) {
    const dy = ey - cy, dx = ex - cx;
    return (Math.atan2(dy, dx)) * 180 / Math.PI;
}