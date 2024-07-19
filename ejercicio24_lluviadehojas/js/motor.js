// const RATIO = 1;
// const VELOCIDAD = 0.5;
// var y = -50;
// var x = 200;

// setInterval(() => {
//     y += VELOCIDAD;
//     x += VELOCIDAD;
//     document.querySelector("#gato1").style.top = `${y}px`;
//     document.querySelector("#gato1").style.left = `${x}px`;
//     if (y > window.innerHeight) {
//         y = -100;
//         x = Math.random() * window.innerWidth;
//     }
//     if (x > window.innerWidth) {
//         x = -100;
//         y = Math.random() * window.innerHeight;
//     }
// }, RATIO);
const RATIO = 10; // Interval in milliseconds
const VELOCIDAD_X = 2; // Horizontal speed
const VELOCIDAD_Y = 2; // Vertical speed
var y = 200; // Initial vertical position
var x = 200; // Initial horizontal position
var velocidadX = VELOCIDAD_X; // Initial horizontal velocity
var velocidadY = VELOCIDAD_Y; // Initial vertical velocity

setInterval(() => {
    x += velocidadX;
    y += velocidadY;

    // Check for collision with the edges and reverse direction if needed
    if (x <= 0 || x >= window.innerWidth - document.querySelector("#gato1").offsetWidth) {
        velocidadX = -velocidadX;
    }
    if (y <= 0 || y >= window.innerHeight - document.querySelector("#gato1").offsetHeight) {
        velocidadY = -velocidadY;
    }

    document.querySelector("#gato1").style.top = `${y}px`;
    document.querySelector("#gato1").style.left = `${x}px`;
}, RATIO);

document.querySelector("#bCerrar").addEventListener("click", () => {
    document.querySelector("footer").style.bottom = "-100px";
    document.querySelector("footer").style.opacity = 0;
});