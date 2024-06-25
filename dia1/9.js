// string

//creacion - 3 formas

const firstOptn = 'comillas simples'
const secondOptn = "doples comillas"
const ThirdOptn = `comillas tumbadas`

//--------------------------------------------//

const drccn = "calle x";
const ciudad = "madrid";
const direccionCompleta = 'Mi direccion es ' + drccn + ' en ' + ciudad;
console.log(direccionCompleta);

const nombre = 'Jesus'
const pais = '🏴‍☠️'
const presentacion = `Hola, soy ${nombre} y soy de ${pais}, pirata`
console.log(presentacion);

const uno = 'hola'
const dos = 'que tal '
const tres = 'ehh?'
const igual = [uno, dos, tres]
console.log(igual.join('🍊'));

let h1 = 'correr'
let h2 = 'leer'
let hh = 'Mis hobbies son: '.concat(h1 ,'👗', h2)
console.log(hh);