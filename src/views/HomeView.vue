<script setup lang="ts">
//import {SolrSerachPanel} from ""
import {solrFields, queryApi} from '@/appsettings'

</script>

<template>
  <h1>Home</h1>

   <SolrSearchPanel :search-fields="solrFields" :query-api="queryApi" />
</template>
