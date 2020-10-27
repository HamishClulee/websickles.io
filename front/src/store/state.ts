import { WgtState } from '../../interfaces/IState'

import { State } from '../../interfaces/IState'

import { NAVBAR, HEADER, CONTENT_BLOCKS } from '../../interfaces/IWidgetNames'

export const state: State = {
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
    static: {
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
    content: [],
}