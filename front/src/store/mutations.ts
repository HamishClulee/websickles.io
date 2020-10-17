import { State, WgtState } from '../../interfaces/IState'
import { AuthResponse } from '../../interfaces/IApi'
import { removetoken, settoken } from '../api/token'

const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE'
const SET_SCROLL_LOCATION = 'SET_SCROLL_LOCATION'
const IS_AUTHED = 'IS_AUTHED'

const SET_WIDGET_STATE = 'SET_WIDGET_STATE'
// const SET_WIDGET_ACTIVE = 'SET_WIDGET_ACTIVE'

interface SetWgtStatePayload { 
    elementID: string,
    wgtState: WgtState 
}

const mutations = {

    // [SET_WIDGET_ACTIVE]: (state: State, widgetKey: string) => {

    // },

    [SET_WIDGET_STATE]: (state: State, payload: SetWgtStatePayload) => {

        if (payload.wgtState === WgtState.Dragging) state.drag.current = payload.elementID

        state.widgets[payload.elementID].state = payload.wgtState
        
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
