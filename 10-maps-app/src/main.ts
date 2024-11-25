import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamVzdXNzb2xpczE1MDgiLCJhIjoiY20zeG8xbmlyMWQ4czJrb3N0ejN6bW5sciJ9.R3aZBwNUkIIVU49hQNFVbA';

if( !navigator.geolocation ) {
    throw new Error ('El navegador no soporta el Geolocalitation ')
}


createApp(App).use(store).use(router).mount('#app')
