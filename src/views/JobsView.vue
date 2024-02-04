<script setup lang="ts">
import { useShowtimeStore } from '@/stores';
import { adminUsers, showtimesTenantId, dataSourceOptions }  from '@/appsettings'
import { onMounted, ref, watch } from 'vue';

const store = useShowtimeStore();

const apiRoot = ref(dataSourceOptions[0].api)

onMounted(() => {
  store.isLocalHost = (window.location?.host?.indexOf('localhost') >= 0);

  if(store.getApiToken?.length > 0){
    store.loadApiToken();
  }
})

</script>

<template>
    <h4>Jobs</h4>
    <!--
    {{ showtimesTenantId }}<br />
    {{ apiRoot }}<br />
    {{ store.getApiToken }}
    -->
    <JobTracker 
      :api-root="apiRoot" 
      :page-size="50" 
      :user="store.user" 
      :admins="adminUsers"
      :api-token="store.getApiToken"
      :tenant-id="showtimesTenantId"/>
  </template>