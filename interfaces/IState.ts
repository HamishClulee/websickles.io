import { QUser } from './IUser'

export interface State {
    user: QUser['user'],
    ui: UI,
    drag: Drag,
}
export interface UI {
    windowWidth: number,
    windowHeight: number,
    scrollY: number,
}

export interface Drag {
    current: String,
}