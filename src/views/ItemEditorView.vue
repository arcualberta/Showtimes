<script setup lang="ts">
import { useRoute } from 'vue-router';
import type {Guid} from 'guid-typescript'
import { useShowtimeStore } from '@/stores';
import { ref } from 'vue';

//import { useShowtimeStore } from '@/stores';
//import { adminUsers }  from '@/appsettings'

//const showtimesStore = useShowtimeStore();

const route = useRoute();
const id = route.params.id as unknown as Guid;

const store = useShowtimeStore();
const apiToken = ref(store.getApiToken);

</script>

<template>
    <h4>Edit Item</h4>
    
    ID: {{ id }}

    <div>API Token: {{ apiToken }}</div>
  </template>