<script setup lang="ts">
import { useRoute } from 'vue-router';
import type {Guid} from 'guid-typescript'
import { useShowtimeStore } from '@/stores';
import { ref, watch } from 'vue';
import { getActivePinia } from 'pinia';
import { adminUsers, showtimesTenantId, applicationSpecificExcludedFields }  from '@/appsettings'
import * as CatfishUI from 'applets'

const route = useRoute();
const id = route.params.id as unknown as Guid;

const store = useShowtimeStore();
const solrSearchStore = CatfishUI.SolrSearchStore();
console.log("Data Source: ", solrSearchStore.getSelectedDataSource)

const apiToken = ref(store.getApiToken);
watch(apiToken, async (newVal, oldVal) => {
  
    apiToken.value = newVal as string;
    console.log("updated apiToken" + apiToken.value)
});


</script>
<template>
    <SolrItemEditor 
               :pinia-instance="getActivePinia()"
               :id="id" 
               :api-token="store.getApiToken"
               :tenant-id="showtimesTenantId"
               :api-root="store.apiRoot1"
               :appSpecificExcludedFields="applicationSpecificExcludedFields"
               />
  </template>