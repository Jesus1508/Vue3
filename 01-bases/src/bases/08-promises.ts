import type { Hero } from '../data/heroes';
import { getHeroById } from './07-imp-exp';

// console.log('Inicio')

// new Promise( ( resolve, reject ) => {
//     // console.log('::::::: Cuerpo de la promes');
//     setTimeout(() => {
//         // resolve (':::::: cumplio');

//         reject ('No cumple')
//     }, 1000);

// }).then( ( message ) => {
//     console.log(message)
// }).catch( ( message ) => {
//     console.warn( message )
// }).finally( () => console.log('Promesa finalizada') );

// console.log('Final')

// const getHeroByIdAsync = ( id: number ):Promise<Hero> => {

//     return new Promise( (resolve, reject) => {

//         setTimeout(() => {
            
//             const hero = getHeroById( id );

//             if ( hero ){
//                 resolve (hero);
//             }else{
//                 reject( `Heroe no encontrado con el id ${id}` )
//             }

//         }, 1500);

//     })

// }


const getHeroByIdAsync = ( id: number ):Promise<Hero> => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            
            const hero = getHeroById( id );

            hero 
                ? resolve(hero) 
                : reject( `Heroe no encontrado con el id ${id}` )
            
        }, 1500);

    })

}

getHeroByIdAsync(3)
    .then( hero => console.log('El nobre es', hero.name))
    .catch( msg => console.warn(msg))