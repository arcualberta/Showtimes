<script setup lang="ts">
//import {SolrSerachPanel} from ""
import {eUiMode, solrFields} from '@/appsettings'
import { useShowtimeStore } from '@/stores';
import { onMounted, ref } from 'vue';
import { entryTypeFieldName, entryTypeFieldOptions, dataSourceOptions } from '../appsettings'
import { adminUsers }  from '@/appsettings'
import type {Guid} from 'guid-typescript'
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const currentUser = sessionStorage.getItem("user");
const allowEdit = currentUser? adminUsers.includes(currentUser) : false;

const isValidGUID = (value: string): boolean =>  (/^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/).test(value)

const editItemId = ref("");
const router = useRouter();

watch(editItemId,  async (newId, oldId) => {
  if(isValidGUID(newId))
  {
    router.push(`/edit/${newId}`)
  }
})

const store = useShowtimeStore();

onMounted(() => {
  store.uiMode = eUiMode.Default
})
</script>

<template>
  {{ editItemId }}
  <h4>Edit</h4>
  <input v-model="editItemId" />
  <h4>Filter</h4>
  <!--<input type="checkbox" v-model="store.targetDuplicateIndex" /> Use index with duplicate showtime records-->
  <SolrSearchPanel 
    :search-fields="solrFields" 
    :query-api="store.queryApi"
    :entry-type-field-name="entryTypeFieldName"
    :data-source-options="dataSourceOptions"
    :entryTypeFieldOptions="entryTypeFieldOptions"
    :ui-mode="store.uiMode"
    :user="store.user"
    :enable-editing="allowEdit"
    :edit-Page="'editPageCallback'" />
</template>
