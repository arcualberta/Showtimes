import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import * as CatfishUI from 'applets'

const app = createApp(App)

app.use(createPinia())
app.use(router)

for (const entry of Object.entries({ 
  ...CatfishUI
 })) { 
    if(entry[0] === 'Components')
        app.component("SolrSearchPanel", entry[1].SolrSearchPanel)
 }
 


app.mount('#app')
