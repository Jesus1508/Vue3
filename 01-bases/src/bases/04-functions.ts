

// function greetPerson( name: string ) {
//     return `Hola ${ name }`;
// }

// const greetPerson = ( name: string ) => {
//     return `Hola ${ name }`;
// }

const greetPerson = ( name: string ) => `Hola ${ name }`;

console.log( greetPerson('Jesus') );

const getUser = ( uid: string) =>
    ({
        uid,
        username: 'Jesus1508'
    })

console.log( getUser('XYZ-456') );