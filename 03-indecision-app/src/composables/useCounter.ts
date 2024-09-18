import { computed, ref } from "vue";

// const counter = ref<number>(Number(10));

export const useCounter = (initialValue: number = 5) => {

    const counter = ref<number>(Number(initialValue));
    // const squareCounter = computed(() => counter.value * counter.value);

    return{
        counter,
        // Read-only
        squareCounter: computed(() => counter.value * counter.value),
    }

}