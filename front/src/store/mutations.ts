import { State, WgtState } from '../../interfaces/IState'
import { AuthResponse } from '../../interfaces/IApi'
import { removetoken, settoken } from '../api/token'

const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE'
const SET_SCROLL_LOCATION = 'SET_SCROLL_LOCATION'
const IS_AUTHED = 'IS_AUTHED'
const SET_CONTENT_STATE = 'SET_CONTENT_STATE'
const SET_STATIC_STATE = 'SET_STATIC_STATE'

interface SetWgtStatePayload { 
    elementID: string,
    wgtState: WgtState,
    type?: string,
    index?: number,
    isOriginal?: boolean,
    isDelete?: boolean,
}

const mutations = {

    [SET_STATIC_STATE]: (state: State, payload: SetWgtStatePayload) => {

        if (payload.wgtState === WgtState.Dragging) state.drag.current = payload.elementID
        else if (payload.wgtState === WgtState.Placed || payload.wgtState === WgtState.Dormant) state.drag.current = ''

        if (state.static[payload.elementID]) {
            state.static[payload.elementID].state = payload.wgtState
        }

    },

    [SET_CONTENT_STATE]: (state: State, payload: SetWgtStatePayload) => {
        if (payload.wgtState === WgtState.Dragging) state.drag.current = payload.elementID
        else if (payload.wgtState === WgtState.Placed || payload.wgtState === WgtState.Dormant) state.drag.current = ''

        if (payload.isOriginal) {
            // TODO: add new item
            // TODO: reorder items
            // TODO: remove items
        }

        if (payload.index) state.content[payload.index].state = payload.wgtState
    
    },

    [IS_AUTHED]: (state: State, details: AuthResponse) => {
        state.user.authed = details.authed
        state.user.email = details.email
        state.user.id = details.id
        state.user.subdom = details.subdom
        if (details.token !== null) details.authed ? settoken(details.token) : removetoken()
        else removetoken()
    },
    [SET_WINDOW_SIZE]: (state: State) => {
        state.ui.windowWidth = window.innerWidth
        state.ui.windowHeight = window.innerHeight
    },
    [SET_SCROLL_LOCATION]: (state: State) => {
        state.ui.scrollY = window.scrollY
    },

}

export default mutations
