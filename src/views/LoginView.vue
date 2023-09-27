<script setup lang="ts">
import type * as CatfishUI from 'applets'
import jwt_decode from "jwt-decode";

import { useShowtimeStore } from '@/stores';
import router from '@/router';

const store = useShowtimeStore();

const callback = (response: CatfishUI.components.GoogleIdentityResult) => {
        // This callback will be triggered when the user selects or login to
        // their Google account from the popup

        const token = jwt_decode(response?.credential) as { email: string | null }
        store.user = token?.email;
        if(store.user){
          sessionStorage.setItem("user", store.user);
        }
        router.push("/")
    }
</script>

<template>
  <div class="login">
    <GoogleLogin :callback="callback" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  
}
</style>
