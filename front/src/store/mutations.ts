import { WgtState } from '../../interfaces/IState'

import { MutationTree } from 'vuex'

import { State } from '../../interfaces/IState'

import { AuthResponse } from '../../interfaces/IApi'
import { removetoken, settoken } from '../api/token'

export enum MutationTypes {
    SET_WINDOW_SIZE = 'SET_WINDOW_SIZE',
    SET_SCROLL_LOCATION = 'SET_SCROLL_LOCATION',
    IS_AUTHED = 'IS_AUTHED',
    SET_CONTENT_STATE = 'SET_CONTENT_STATE',
    SET_STATIC_STATE = 'SET_STATIC_STATE',
}

interface SetWgtStatePayload { 
    elementID: string,
    wgtState: WgtState,
    type?: string,
    index?: number,
    isOriginal?: boolean,
    isDelete?: boolean,
}

export type Mutations<S = State> = {

    [MutationTypes.SET_STATIC_STATE] (state: S, payload: SetWgtStatePayload): void
    [MutationTypes.SET_CONTENT_STATE] (state: S, payload: SetWgtStatePayload): void
    [MutationTypes.IS_AUTHED] (state: S, details: AuthResponse): void
    [MutationTypes.SET_WINDOW_SIZE] (state: S): void
    [MutationTypes.SET_SCROLL_LOCATION] (state: S): void
}

export const mutations: MutationTree<State> & Mutations = {

    [MutationTypes.SET_STATIC_STATE]: (state, payload: SetWgtStatePayload) => {

        if (payload.wgtState === WgtState.Dragging) state.drag.current = payload.elementID
        else if (payload.wgtState === WgtState.Placed || payload.wgtState === WgtState.Dormant) state.drag.current = ''

        if (state.static[payload.elementID]) {
            state.static[payload.elementID].state = payload.wgtState
        }

    },

    [MutationTypes.SET_CONTENT_STATE]: (state, payload: SetWgtStatePayload) => {
        if (payload.wgtState === WgtState.Dragging) state.drag.current = payload.elementID
        else if (payload.wgtState === WgtState.Placed || payload.wgtState === WgtState.Dormant) state.drag.current = ''

        if (payload.isOriginal) {
            // TODO: add new item
            // TODO: reorder items
            // TODO: remove items
        }

        if (payload.index) state.content[payload.index].state = payload.wgtState
    
    },

    [MutationTypes.IS_AUTHED]: (state, details: AuthResponse) => {
        state.user.authed = details.authed
        state.user.email = details.email
        state.user.id = details.id
        state.user.subdom = details.subdom
        if (details.token !== null) details.authed ? settoken(details.token) : removetoken()
        else removetoken()
    },
    [MutationTypes.SET_WINDOW_SIZE]: (state) => {
        state.ui.windowWidth = window.innerWidth
        state.ui.windowHeight = window.innerHeight
    },
    [MutationTypes.SET_SCROLL_LOCATION]: (state) => {
        state.ui.scrollY = window.scrollY
    },

}
