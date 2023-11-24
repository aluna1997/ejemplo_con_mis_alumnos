// Requerimientos: Solicita las coordenadas (x, y) de un punto e 
// indica en qué cuadrante se encuentra.

var x = 0;
var y = 1;

if (x > 0 && y > 0) {
    console.log("El punto se encuentra en el primer cuadrante.");
} else if (x < 0 && y > 0) {
    console.log("El punto se encuentra en el segundo cuadrante.");
} else if (x < 0 && y < 0) {
    console.log("El punto se encuentra en el tercer cuadrante.");
} else if (x > 0 && y < 0) {
    console.log("El punto se encuentra en el cuarto cuadrante.");
} else {
    console.log("El punto esta sobre un eje.");
}
// Yo hago mis cambios, sin pensar en gisela.
