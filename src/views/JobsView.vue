<script setup lang="ts">
import { useShowtimeStore } from '@/stores';

const store = useShowtimeStore();
</script>

<template>
    <h4>Jobs</h4>
    <JobTracker :api-root="store.apiRoot" />
  </template>