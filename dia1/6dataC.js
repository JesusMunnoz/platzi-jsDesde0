//Complejos mutables
/*
object
array
function
*/
//  >> se pasan por referencia

let user = {nombre: "Juan", edad: 22}
console.log(user);
console.log(typeof user);
console.log(user.nombre);
user.nombre = 'Pepe';
console.log(user);

let arr = [1, 2, 3];
console.log(arr);
arr[0] = 24;
console.log(arr);
console.log(typeof arr);

function cambiarNombre (objeto) {
    objeto.nombre = 'nuevo nombre'
}

let persona = {nombre: 'Toni'}
cambiarNombre(persona)

console.log(persona);