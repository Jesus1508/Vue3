
<template>
    <h1>My primera app</h1>
    <hr />
    <MyCounter :value="5" />

    <hr />

    <MyCounterScript :value="15" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>