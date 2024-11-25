import { usePlacesStore } from '@/composables'
import mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'MapView',

    setup() {

        const mapElement = ref<HTMLDivElement>();
        const {  userLocation, isUserLocationReady } = usePlacesStore()

        const initMap = () => {
            
            if ( !mapElement.value ) throw new Error('Div element no existe');
            if ( !userLocation.value ) throw new Error('userLocation no existe');

            const map = new mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v12', 
                center: userLocation.value, 
                zoom: 15, 
            });
        }

        onMounted ( () => {
            if( isUserLocationReady ) 
                return initMap();
        } )

        return {
            isUserLocationReady,
            mapElement
        }

    }
})
