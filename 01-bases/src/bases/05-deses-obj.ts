
interface Heroe {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

export const person: Heroe = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman',
    // power:'money'
}

// console.log(person.name)
// console.log(person.age)
// console.log(person.codeName)

// console.log({
//     name: person.name,
//     age: person.age,
// })

// const { age, name, power = 'No tiene poder' } = person //Objeto o Arreglo
// console.log({ age, name, power })

interface CreateHeroeArgs {
    name: string,
    age: number,
    codeName: string,
    power: string
}

const createHeroe = ( { name, age, codeName, power }: CreateHeroeArgs  ) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder'
})

console.log(createHeroe( person ))

