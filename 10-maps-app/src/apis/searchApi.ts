import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/search/geocode/v6/forward?q=',
    params: {
        limit: 5,
        language: 'es',
        access_token:'pk.eyJ1IjoiamVzdXNzb2xpczE1MDgiLCJhIjoiY20zeG8xbmlyMWQ4czJrb3N0ejN6bW5sciJ9.R3aZBwNUkIIVU49hQNFVbA',
    }
})

export default searchApi;