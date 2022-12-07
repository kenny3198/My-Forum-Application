import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Firebase 8 was used when recording this course.
// You have the later version 9 installed 
// to follow along you can use the compat mode for 9
// see firebase docs here: https://firebase.google.com/docs/web/modular-upgrade
import firebase from "firebase/compat/app"
import firebaseConfig from '@/config/firebase'
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const forumApp = createApp
forumApp(App).use(store)
// forumApp.component('AppDate', AppDate)
.use(router)
.mount('#app')
 