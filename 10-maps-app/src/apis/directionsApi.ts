import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token:'pk.eyJ1IjoiamVzdXNzb2xpczE1MDgiLCJhIjoiY20zeG8xbmlyMWQ4czJrb3N0ejN6bW5sciJ9.R3aZBwNUkIIVU49hQNFVbA',
    }
})

export default directionsApi;