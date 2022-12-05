import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"
import firebaseConfig from '@/config/firebase'
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const forumApp = createApp
forumApp(App).use(store)
// forumApp.component('AppDate', AppDate)
.use(router)
.mount('#app')
 