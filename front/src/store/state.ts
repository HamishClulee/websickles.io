import { State, WgtState } from '../../interfaces/IState'
import { NAVBAR, HEADER } from '../../interfaces/IWidgetNames'
const state: State = {
    user: {
        email: null,
        id: null,
        authed: false,
        subdom: null,
        role: null,
        tier: null,
    },
    ui: {
        windowWidth: 0,
        windowHeight: 0,
        scrollY: 0,
    },
    drag: {
        current: '',
    },
    widgets: {
        [NAVBAR]: {
            state: WgtState.Dormant,
            description: { placeholder: '' },
            baseStyles: { placeholder: '' },
            iconPath: '',
        },
        [HEADER]: {
            state: WgtState.Dormant,
            description: { placeholder: '' },
            baseStyles: { placeholder: '' },
            iconPath: '',
        },
    },
}

export default state
