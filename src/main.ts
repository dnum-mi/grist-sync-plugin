import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvminint/vue-dsfr/dist/vue-dsfr.css' 
import VueDsfr from '@gouvminint/vue-dsfr'


createApp(App)
.use(VueDsfr)
.mount('#app')
