import { useMapStore, usePlacesStore } from '@/composables'
import mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
    name: 'MapView',

    setup() {

        const mapElement = ref<HTMLDivElement>();
        const {  userLocation, isUserLocationReady } = usePlacesStore()
        const { setMap } = useMapStore();

        const initMap = async() => {
            
            if ( !mapElement.value ) throw new Error('Div element no existe');
            if ( !userLocation.value ) throw new Error('userLocation no existe');

            await Promise.resolve();

            const map = new mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/dark-v10', 
                center: userLocation.value, 
                zoom: 15, 
            });

            const myLocationPopup = new mapboxgl.Popup( { offset:[0,-45] } )
                .setLngLat( userLocation.value )
                .setHTML(`
                        <h4>Aquí estoy...</h4>
                        <p>Ubicación actual..</p>
                        <p>${ userLocation.value }</p>
                    `);

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map );


            // todo: establecer el mapa en Vuex
            setMap( map );
        }

        onMounted ( () => {
            if( isUserLocationReady.value ) 
                return initMap();
        } )

        watch( isUserLocationReady, (newVal) => { 
            if( isUserLocationReady.value ) initMap()
        })

        return {
            isUserLocationReady,
            mapElement
        }

    }
})
