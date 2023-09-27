<script setup lang="ts">
//import {SolrSerachPanel} from ""
import {solrFields, eUiMode} from '@/appsettings'
import { useShowtimeStore } from '@/stores';
import { onMounted } from 'vue';

const store = useShowtimeStore();

onMounted(() => {
  store.uiMode = eUiMode.Raw
})
</script>

<template>
  <h4>Solr Query</h4>
  <SolrSearchPanel :search-fields="solrFields" :query-api="store.queryApi" :ui-mode="store.uiMode" :user="store.user"/>
</template>
