

const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [ g, v, t, g2, g3 = 'Yamoshi' ] = character

console.log({ g, v, t, g2, g3 })

const returnArray = () => {
    return [123, 'ABC'] as const;
}

const [ numbers, letters ] = returnArray();

// console.log({ numbers, letters })

// console.log( numbers * 2, letters.toLowerCase() )