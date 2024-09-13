
import axios from 'axios';
import { GIFResponse } from '../interfaces/gif.response';

const apiKey = 'Z1bOyXNP0e5l0duZE8u58HSyULZoeACg';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey,
    }
});

export default giphyApi;

// giphyApi.get<GIFResponse>('/random')
//     .then( resp => console.log(resp.data.data.images.downsized_large.url) )
//     .catch( err => console.log(err) )
