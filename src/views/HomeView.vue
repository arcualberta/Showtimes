<script setup lang="ts">
//import {SolrSerachPanel} from ""
import {eUiMode, solrFields, sweepableFieldNames} from '@/appsettings'
import { useShowtimeStore } from '@/stores';
import { onMounted } from 'vue';
import { entryTypeFieldName, entryTypeFieldOptions } from '../appsettings'

const store = useShowtimeStore();

onMounted(() => {
  store.uiMode = eUiMode.Default
})
</script>

<template>
  <h4>Filter</h4>
  <!--<input type="checkbox" v-model="store.targetDuplicateIndex" /> Use index with duplicate showtime records-->
  <SolrSearchPanel 
    :search-fields="solrFields" 
    :sweepable-field-names="sweepableFieldNames"
    :query-api="store.queryApi"
    :entry-type-field-name="entryTypeFieldName"
    :entryTypeFieldOptions="entryTypeFieldOptions"
    :ui-mode="store.uiMode" />
</template>
