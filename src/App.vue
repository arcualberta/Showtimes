<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useShowtimeStore } from './stores';

const store = useShowtimeStore();

const storedUser = sessionStorage.getItem("user");
if(storedUser && storedUser?.length > 0){
  store.user = storedUser
}

const logout = () => {
  store.user = null;
  sessionStorage.removeItem("user")
  return false;
}

onMounted(() => {
  store.isLocalHost = (window.location?.host?.indexOf('localhost') >= 0);
   store.loadApiToken();

})
//  const apiToken = store.getApiToken;//ref(store.apiToken as string);
//console.log("apiToken" + apiToken)

const apiToken = ref(store.getApiToken)
watch(apiToken, async (newVal, oldVal) => {
  
    apiToken.value = newVal as string;
    console.log("updated apiToken" + apiToken.value)
});


</script>

<template>
  <h1>Showtimes Database</h1>
  <div>ApiToken: {{store.getApiToken}}</div>
  <header>
    <nav>
        <RouterLink to="/">Filter</RouterLink>
        <RouterLink to="/raw">Query</RouterLink>
        <RouterLink to="/jobs">Jobs</RouterLink>
        <span style="float: right;">
          <span v-if="store.user?.length && store.user?.length > 0">
            Welcome {{store.user}}!
            <router-link :to="{}" href="" @click="logout">Logout</router-link>
          </span>
          <RouterLink v-else to="/login">Login</RouterLink>
      </span>
      </nav>
  </header>
  <div class="mt-3">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
 /* max-height: 100vh;*/
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
