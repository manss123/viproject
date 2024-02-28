import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import vue3GoogleLogin from 'vue3-google-login'
import GoogleSignInPlugin from "vue3-google-signin"

let gAuthClientID = '224193849354-geioa248efi1kqh2t0ktokv4o4lgujr0.apps.googleusercontent.com'
// const gAuthOptions = { clientId: gAuthClientID, scope: 'email', prompt: 'consent', fetch_basic_profile: false }

onAuthStateChanged(auth, () => {
    createApp(App).use(Quasar, quasarUserOptions).use(vue3GoogleLogin, {clientId: gAuthClientID}).use(GoogleSignInPlugin, {
        clientId: gAuthClientID,
      }).use(router).mount('#app')
})


