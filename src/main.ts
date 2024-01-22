import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'
import IconsPlugin from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faIcons.faCircleCheck)
library.add(faIcons.faCircleXmark)
library.add(faIcons.faPenToSquare)
library.add(faIcons.faCirclePlus)
library.add(faIcons.faQuestionCircle)
library.add(faIcons.faThList)
library.add(faIcons.faArrowLeft)
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import { googleLocalClientId, googleProductionClientId } from '@/appsettings'

import '../node_modules/applets/dist/style.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import * as CatfishUI from 'applets'
import vue3GoogleLogin from 'vue3-google-login'
import * as SolrItemEditor from 'npm.solr-item-editor'
const app = createApp(App)

const isLocalHost = (window.location?.host?.indexOf('localhost') >= 0)
const googleClientId = isLocalHost ? googleLocalClientId : googleProductionClientId;

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3) 
app.use(IconsPlugin) 
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(CatfishUI.FloatingVue)
app.use(vue3GoogleLogin, {
  //refer to https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit#heading=h.4zlex6l80fxx
  clientId: googleClientId
})

app.component("JobTracker", CatfishUI.Components.JobTracker)
app.component("Login", CatfishUI.Components.Login)
app.component("SolrSearchPanel", CatfishUI.Components.SolrSearchPanel)
app.component("SolrItemEditor", SolrItemEditor.SolrItemEditor)

/*
for (const entry of Object.entries({ 
  ...CatfishUI
 })) { 
    if(entry[0] === 'Components')
        app.component("SolrSearchPanel", entry[1].SolrSearchPanel)
 }
 */


app.mount('#app')
