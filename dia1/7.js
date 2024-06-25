//Complejos - Mutables
// paso por refeerncia

let x = 1;
let y = 'Hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(a, b, c);

let frutas = ['manzana'];
console.log(frutas);
frutas.push('pera');
console.log(frutas);

let panes = ['🍞', '🥐', '🥖']
console.log(panes);
copiPanes = panes;
panes.push('🥨');
console.log(copiPanes);

console.log(panes);
console.log(copiPanes[0]);
