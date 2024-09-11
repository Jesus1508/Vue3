
export const person = {
    lastName : 'Solis',
    age : 40,
    address : {
        city: 'San Cristobal de las Casas',
        zip: 29200,
        lat: 16.4415,
        lng: 92.3812
    }
} //as const;

//Con lo anterior se crea un objeto literal en el cual no se puede cambiar nada

person.age = 55;

//Esto no se puede
// person = {}

//Con lo siguiente se hace una copia de la variable pero si quieres modificar algun
//valor se modificara el primero también por referencia
// const person2 = person;

//Para poder hacer la copia y modificar como se desea el segundo objeto
// const person2 = { ...person }
const person2 = structuredClone(person)

person2.lastName = 'Martinez';
person2.address.city = 'LA';

console.log({person});
console.log({person2});