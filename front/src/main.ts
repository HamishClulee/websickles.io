import 'vue-multiselect/dist/vue-multiselect.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { QAuth } from './api/auth'
import { QAdmin } from './api/admin'

const app = createApp(App)

app.config.globalProperties.$QAdmin = new QAdmin()

const qAuth = new QAuth(store)
app.config.globalProperties.$QAuth = qAuth

export default qAuth

/* eslint-disable no-console */
app.config.errorHandler = (error, vm, info) => {

    if (process.env.NODE_ENV === 'development') {
        console.error(error, vm, info)
    }

    app.config.globalProperties.$QAdmin.clientsideerror({
        time: new Date(),
        userAgent: navigator.userAgent,
        error, info,
    })

    return false
}

window.onerror = (message, url, line, column, error) => {

    if (process.env.NODE_ENV === 'development') {
        console.error(message, url, line, column, error)
    }

    app.config.globalProperties.$QAdmin.clientsideerror({
        time: new Date(),
        userAgent: navigator.userAgent,
        message, url, line, column, error,
    })

    return false
}
/* eslint-enable no-console */

app.use(router).use(store).mount('#app')