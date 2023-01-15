import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "./config/firebase"
  
let forumApp;
firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if (!forumApp) {
    // User is signed in.
    forumApp = createApp
    forumApp(App).use(store)
    // forumApp.component('AppDate', AppDate)
    .use(router)
    .mount('#app')
  }
});

 
 