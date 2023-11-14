// function buscar() {
//     buscar = document.getElementById('txtBuscar').value;
//     alert(buscar);
// }

console.log('INDEX -------');
function enviar() {
    alert('Hiciste click')
    console.log('Hiciste click');
}

let nombre = 'maria';
console.log(nombre);
console.log(123);
console.log('maria');
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);
console.log(typeof nombre);
console.log(nombre instanceof Array);
console.log(nombre);
console.log(typeof 123);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);

console.log({ nombre: 'maria'}); //Object
console.log([1,2,3,4,5,'nombre',true]);
console.log(typeof [1,2,3,'casa',true]);
console.log([1,2,3,'casa', true] instanceof Array);
console.log(typeof {nombre: 'maria'});

let nombres = ['maria','juana','david']
console.log(nombres);

let nombre1 = 'juana'
if (nombre1 === 'juana') {
    console.log(nombre1);
} else {
    console.log('No son iguales')
}