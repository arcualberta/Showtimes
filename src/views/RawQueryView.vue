<script setup lang="ts">
//import {SolrSerachPanel} from ""
import {solrFields, queryApi, eUiMode} from '@/appsettings'

</script>

<template>
  <h1>Raw Query</h1>

   <SolrSearchPanel :search-fields="solrFields" :query-api="queryApi" :ui-mode="eUiMode.Raw"/>
</template>
