import axios, { AxiosResponse, AxiosInstance, AxiosPromise } from 'axios'
import { QUser } from '../../interfaces/IUser'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('AuthToken')}`

import { DEV_SERVER, DEV_CLIENT, PROD_BASE } from './config'

interface ErrorPayload {
    time: Date,
    userAgent: string,
    info?: string
    message?: string,
    url?: string,
    line?: number,
    column?: number,
    error?:  Error,
}

export class QAdmin {

    private BASE_URL = process.env.NODE_ENV === 'development' ? `${DEV_SERVER}/admin` : `${PROD_BASE}/admin`

    ax: AxiosInstance;

    /** 
     * Store is passed to allow getuser to make commit 
     * Only called from main.ts on app spin up
     * */
    constructor() {

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

    }

    private ensureTwoDigits(term: number, offset = false): string {
        term = offset ? (term + 1) : term
        return ('0' + term).slice(-2)
    }

    getlogbyday(day: string = ''): AxiosPromise<QUser> {

        let _day, today = new Date()

        if (day === '') {
            _day = `${today.getFullYear()}-${this.ensureTwoDigits(today.getMonth(), true)}-${this.ensureTwoDigits(today.getDate())}`
        }

        return this.ax.post('get_log_by_day', { day })
    }

    getalllogfilenames(): AxiosPromise<QUser> {
        return this.ax.post('get_all_log_filenames')
    }

    clientsideerror(errdeets: ErrorPayload): AxiosPromise<QUser> {
        return this.ax.post('new_client_side_error', { errdeets })
    }
}
