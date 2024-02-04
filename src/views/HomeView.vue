<script setup lang="ts">
//import {SolrSerachPanel} from ""
import {eUiMode, solrFields} from '@/appsettings'
import { useShowtimeStore } from '@/stores';
import { computed, onMounted, ref } from 'vue';
import { entryTypeFieldName, entryTypeFieldOptions, dataSourceOptions } from '../appsettings'
import { adminUsers, showtimesTenantId }  from '@/appsettings'
import type {Guid} from 'guid-typescript'
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const currentUser = sessionStorage.getItem("user");
const allowEdit = currentUser? adminUsers.includes(currentUser) : false;

const store = useShowtimeStore();
const selectedApiUrl=ref('');
onMounted(() => {
  store.uiMode = eUiMode.Default
})

const apiToken = ref(store.getApiToken);
watch(apiToken, async (newVal, oldVal) => {
  
    apiToken.value = newVal as string;
    console.log("updated apiToken" + apiToken.value)
});

const selectedApiUrlFromChildComponent = (val: string)=>{
  store.setSelectedApiUrl(val);
  sessionStorage.setItem("currentSelectedApi", val);
}

</script>

<template>
  <h4>Filter</h4>
  <!--<input type="checkbox" v-model="store.targetDuplicateIndex" /> Use index with duplicate showtime records-->
  <SolrSearchPanel 
    :search-fields="solrFields" 
    :entry-type-field-name="entryTypeFieldName"
    :data-source-options="dataSourceOptions"
    :entryTypeFieldOptions="entryTypeFieldOptions"
    :ui-mode="store.uiMode"
    :user="store.user"
    :enable-editing="allowEdit"
    :edit-Page="'edit'"
    :api-token="store.getApiToken"
    :tenant-id="showtimesTenantId"
    
    @getSelectedApiUrl="selectedApiUrlFromChildComponent"
    />
    
</template>
