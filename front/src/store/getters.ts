import { State } from '../../interfaces/IState'

const getters = {
    windowWidth: (state: State) => state.ui.windowWidth,
    windowHeight: (state: State) => state.ui.windowHeight,
    scrollY: (state: State) => state.ui.scrollY,
    isauthed: (state: State) => state.user.authed,
    getuser: (state: State) => state.user,
    getCurrentDrag: (state: State) => state.drag.current,
    getWidgets: (state: State) => state.static,
    getWidget: (state: State) => (name: string) => state.static[name],
}

export default getters
