<script setup lang="ts">
//import {SolrSerachPanel} from ""
import {solrFields} from '@/appsettings'
import { useShowtimeStore } from '@/stores';

const store = useShowtimeStore();

</script>

<template>
  <h4>Filter</h4>
  <input type="checkbox" v-model="store.targetDuplicateIndex" /> Use index with duplicate showtime records
  <SolrSearchPanel :search-fields="solrFields" :query-api="store.queryApi" />
</template>
