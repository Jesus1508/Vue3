
<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>

        <div>
            <button class="btn" @click="counter++">+1</button>
            <button class="btn" @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
// import { computed, ref } from 'vue';
import { useCounter } from '../composables/useCounter';

interface Props {
    value: Number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);

// const counter = ref<number>(Number(props.value));
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scope>
.btn {
    @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700;
}
</style>