import axios, { AxiosInstance, AxiosPromise } from 'axios'
import { QUser } from '../../interfaces/IUser'

import { EventBus, MESSAGES, welcomeback } from '../EventBus'

import { settoken, removetoken } from './token'

import { DEV_SERVER, PROD_BASE } from './config'

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('AuthToken')}`

export class QAuth {

    private BASE_URL = process.env.NODE_ENV === 'development' ? `${DEV_SERVER}/auth` : `${PROD_BASE}/auth`

    ax: AxiosInstance;

    /** 
     * Store is passed to allow getuser to make commit 
     * Only called from main.ts on app spin up
     * */
    constructor(store: any) {

        this.ax = axios.create({
            baseURL: this.BASE_URL,
            withCredentials: true,
            headers: {
                Authorization  : `Bearer ${localStorage.getItem('AuthToken')}`,
            },
        })

        axios.interceptors.request.use(config => {
            config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('AuthToken')}`
            return config
        }, (error) => {
            return Promise.reject(error)
        })

        /** 
         * This is called when ever the app is spun up
         * Done in background, no UI reflection 
        */
        this.getuser().then(res => {

            if (res.data.user.token !== null && res.data.user.token) settoken(res.data.user.token)

            store.commit('IS_AUTHED', res.data.user)

            if (res.data.user.email !== null) {
                EventBus.emit(MESSAGES, welcomeback(res.data.user.email))
            }

        })

    }

    getuser(): AxiosPromise<QUser> {
        return this.ax.post('user', {})
    }

    usersettings(): AxiosPromise<QUser> {
        return this.ax.post('/user_settings', {})
    }

    togglesubscribe(subscribe: boolean): AxiosPromise<QUser> {
        return this.ax.post('/toggle_subscribe', { subscribe })
    }

    logout(): AxiosPromise<QUser> {
        removetoken()
        return this.ax.post('/logout')
    }

    signup(email: string, password: string, confirm: string): AxiosPromise<QUser> {
        return this.ax.post('/signup', { email, password, confirm })
    }

    login(email: string, password: string): AxiosPromise<QUser> {
        return this.ax.post('/login', { email, password })
    }

    forgot(email: string): AxiosPromise<QUser> {
        return this.ax.post('/forgot', { email })
    }

    reset(token: string, password: string, confirm: string): AxiosPromise<QUser> {
        return this.ax.post('/reset', { token, password, confirm })
    }

    requestverifyemail(): AxiosPromise<QUser> {
        return this.ax.post('/send_verify_email')
    }

    verifyemailtoken(token: string): AxiosPromise<QUser> {
        return this.ax.post('/verify_email_token', { token })
    }

    contact(email: string, name: string, message: string, selectval: string): AxiosPromise<QUser> {
        return this.ax.post('/contact', { email, name, message, selectval })
    }
}
