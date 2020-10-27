import {
    createStore,
    Store as VuexStore,
    CommitOptions,
} from 'vuex'
import { State } from '../../interfaces/IState'
import { state } from './state'
import { mutations, Mutations } from './mutations'
import { getters, Getters } from './getters'

export default createStore({
    state,
    mutations,
    getters,
})

export type Store = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispatch'> & {

    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>

    } & {

    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }

}