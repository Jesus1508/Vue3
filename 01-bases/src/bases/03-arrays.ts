
const numberArray = [1,2,3,4,5];
//Si añadimos as const hacemos que el arreglo sea de solo lectura, con lo cual
//los valores no se podran cambiar, añadir o eliminar.
numberArray.push(6);


const numberArray2 = [ ...numberArray];
// const numberArray2:(number|string) = [ ...numberArray];
// numberArray2.push('7')
numberArray2.push(7)


console.log({ numberArray });
console.log({ numberArray2 });

export {};