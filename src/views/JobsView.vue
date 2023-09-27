<script setup lang="ts">
import { useShowtimeStore } from '@/stores';
import { adminUsers }  from '@/appsettings'

const showtimesStore = useShowtimeStore();

</script>

<template>
    <h4>Jobs</h4>
    <JobTracker :api-root="showtimesStore.apiRoot" :page-size="50" :user="showtimesStore.user" :admins="adminUsers"/>
  </template>