

// function greetPerson( name: string ) {
//     return `Hola ${ name }`;
// }

// const greetPerson = ( name: string ) => {
//     return `Hola ${ name }`;
// }

const greetPerson = ( name: string ) => `Hola ${ name }`;

// console.log( greetPerson('Jesus') );

const getUser = ( uid: string) =>
    ({
        uid,
        username: 'Jesus1508'
    })

// console.log( getUser('XYZ-456') );

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    },
]

const hero = heroes.find( (h) => h.id === 2 )

console.log( hero?.power?.toUpperCase() )