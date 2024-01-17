<script setup lang="ts">
import { useRoute } from 'vue-router';
import type {Guid} from 'guid-typescript'

//import { useShowtimeStore } from '@/stores';
//import { adminUsers }  from '@/appsettings'

//const showtimesStore = useShowtimeStore();

const route = useRoute();
const id = route.params.id as unknown as Guid;

</script>

<template>
    <h4>Edit Item</h4>
    
    {{ id }}
  </template>