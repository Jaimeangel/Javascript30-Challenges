/* CASO NUMBERS,STRINGS AND BOOLEANS */
let num=100;
let num2=num;
console.log(num,num2)
num=150;
console.log(num,num2)

let nombre='Jaime Arturo';
let name2=nombre;
console.log(nombre,name2)
nombre='Jaime Raul'
console.log(nombre,name2)

let bol1=true;
let bol2=false;
console.log(bol1,bol2)
bol1=false;
console.log(bol1,bol2)

console.log('Cuando se trata de string, numbers y booleans')
console.log('Entonces la copia que se hace hacemos otra variable y en esta se guarda la variabel que contenga la informacion')

/* PASARA LO MISMO CON LOS ARRAYS? */
console.log('No paso lo mismo con los Arrays')
const players=['jaime','raul','merecube','ricardino'];
const players2=players;
console.log(players);
console.log(players2);

players2[3]='robertito';
console.log('Despues de cambiar el elemento de posicion numero 3')
console.log(players);
console.log(players2);
console.log('Para este caso si cambias la referencia entonces cambias el array original')

console.log('Lo que haremos entonces sera hacer una copia del array')

console.log('Opcion numero uno 1 con opcion slice')
const array_slice=players.slice();
console.log(array_slice)
console.log('cambiaremos el ultimo elemento')
array_slice[3]='Farfaan'
console.log(array_slice,players)
console.log('Opcion numero uno 2 con opcion concat.')
const array_concat=[].concat(players)
console.log('cambiaremos el ultimo elemento')
array_concat[3]='Riquelminho';
console.log(array_concat,players)

/* Es aconsejable utilizar esta manera */
console.log('La manera es utilizar el spread operator de ES6 [...ARRRAY]')

const NEW_ARRAY=[...players]
NEW_ARRAY[3]='Este es mejor'
console.log(NEW_ARRAY,players)

console.log('Otra manera es con Array.from(ARRAY)')

const NEW_ARRAY_FROM=Array.from(players)
console.log(NEW_ARRAY_FROM)
/* Ahora veamos que pasas con los objetos */
/* Aqui tambien podemos utilizar el spread operator */
const personita={
    nombre:'Naturin',
    age:34,
    fat:true,
    social:{
        twwiter:'loquito',
        face:'developer'
    }
}

/* Este metodo es el unico que verdaderamente crea una copia independiente */
/* Los demas solo crean una copia sombra */
const new_personita=structuredClone(personita)
/* Importante este metodo */
new_personita.social.twwiter='cuerdito'
console.log(personita)
console.log(new_personita)


