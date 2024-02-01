<script setup lang="ts">
import { useRoute } from 'vue-router';
import type {Guid} from 'guid-typescript'
import { useShowtimeStore } from '@/stores';
import { onMounted, ref, watch } from 'vue';
import { getActivePinia } from 'pinia';
import { adminUsers, showtimesTenantId, applicationSpecificExcludedFields }  from '@/appsettings'
import * as CatfishUI from 'applets'

const route = useRoute();
const id = route.params.id as unknown as Guid;

const currentUser = sessionStorage.getItem("user");
const allowEdit = currentUser? adminUsers.includes(currentUser) : false;

const store = useShowtimeStore();

/*
const apiToken = ref(store.getApiToken);
watch(apiToken, async (newVal, oldVal) => {
  
    apiToken.value = newVal as string;
   // console.log("updated apiToken" + apiToken.value)
});
*/

</script>
<template>
    <div v-if="allowEdit">
        <SolrItemEditor 
            :pinia-instance="getActivePinia()"
            :id="id" 
            :api-token="store.getApiToken"
            :tenant-id="showtimesTenantId"
            :api-root="store.setSelectedApiUrl"
            :appSpecificExcludedFields="applicationSpecificExcludedFields"
        />
    </div>
    <div v-else class="alert alert-danger">
        Permission Denied.
    </div>
  </template>