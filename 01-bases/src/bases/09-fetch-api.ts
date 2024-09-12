import type { GIFResponse } from "../interfaces/gif.response";


const apiKey = 'Z1bOyXNP0e5l0duZE8u58HSyULZoeACg';

fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( response => response.json())
    .then( (body:GIFResponse) => {
        console.log(body.data.images.downsized_medium.url)
    } )
    .catch( err => console.log( err ) )