<template>
  <RouterView />
  <VueQueryDevtools/>
</template>

<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { useAuthStore } from './modules/auth/stores/auth.store';
import { AuthSatus } from './modules/auth/interfaces';
import { useRoute, useRouter } from 'vue-router';

const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();

authStore.$subscribe(
  (_, state) => {
    if ( state.authStatus === AuthSatus.Checking){
      authStore.checkAuthstatus();
      return;
    }

    if( route.path.includes('/auth') && state.authStatus === AuthSatus.Authenticated){
      router.replace({name: 'home'})
      return;
    }
},{
  immediate: true
})

</script>
