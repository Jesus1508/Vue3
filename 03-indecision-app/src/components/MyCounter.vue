
<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// const props = defineProps({
//     value: {
//         type: Number,
//         required: true,
//     },
// });

// const props = defineProps<{
//     value: Number;
// }>();

interface Props {
    value: Number;
}
const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
</script>