
import { useMapStore, usePlacesStore } from '@/composables'
import { Feature } from '@/interfaces/places';
import { defineComponent, ref, watch  } from 'vue'

export default defineComponent({
    name: 'SearchResults',
    setup(){

        const { isLoadingPlaces, places, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore()
        
        const activePlace = ref('');

        watch( places, (newPlaces) => {
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        })

        return{
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClicked: ( place: Feature ) => {
                activePlace.value = place.id;
                const { longitude, latitude } = place.properties.coordinates;

                map.value?.flyTo({
                    center: [ longitude, latitude],
                    zoom: 15,
                })
            },
            

            getRouteDirections:( place: Feature ) => {
                if( !userLocation.value ) return; 
                
                const { longitude, latitude } = place.properties.coordinates;

                const [ startLng, startLat ] = userLocation.value;

                const start: [number, number] = [startLng, startLat];
                const end  : [number, number] = [longitude, latitude];

                getRouteBetweenPoints(start, end);
            }
        }
    }
})