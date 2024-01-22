<script setup lang="ts">
import { useRoute } from 'vue-router';
import type {Guid} from 'guid-typescript'
import { useShowtimeStore } from '@/stores';
import { ref, watch } from 'vue';
import { getActivePinia, Pinia } from 'pinia';


//import { useShowtimeStore } from '@/stores';
//import { adminUsers }  from '@/appsettings'

//const showtimesStore = useShowtimeStore();

const route = useRoute();
const id = route.params.id as unknown as Guid;
//const pinia = getActivePinia() as Pinia;
const store = useShowtimeStore();


const apiToken = ref(store.getApiToken);
watch(apiToken, async (newVal, oldVal) => {
  
    apiToken.value = newVal as string;
    console.log("updated apiToken" + apiToken.value)
});

</script>
<template>
    <h4>Edit Item</h4>
    
    <!-- ID: {{ id }}

    <div>API Token: {{ store.getApiToken }}</div> -->
    <SolrItemEditor 
               
               :id="id" 
               :api-token="store.getApiToken"
               />
  </template>