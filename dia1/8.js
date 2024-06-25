//Complejos - Mutables
// paso por refeerncia

let frutas = {
    naranja: '🍊'
}
console.log(frutas);

let vegetales = frutas;

vegetales.naranja = '🥦'
console.log(frutas);

let ropa = {blusa: '👗'}
console.log(ropa);

ropa.pantalos = '👖'
console.log(ropa);