import { QUser } from './IUser'

export interface State {
    user: QUser['user'],
    ui: UI,
    drag: Drag,
    static: StaticWidgets,
    content: Array<ContentWidget>,
}
export interface UI {
    windowWidth: number,
    windowHeight: number,
    scrollY: number,
}

export interface Drag {
    current: string,
}

export interface WidgetStyleDescription {
    placeholder: string,
}

export interface WidgetDescription {
    placeholder: string,
}

export enum WgtState {
	Dormant = 'DORMANT',
    Dragging = 'DRAGGING',
    Placed = 'PLACED',
}

export interface Widget {
    state: WgtState,
    description?: WidgetDescription, // details of the widget contents
    baseStyles?: WidgetStyleDescription, // general widget styles and dimensions, possibly implement
    iconPath: string,
}

export interface ContentWidget extends Widget {
    columns: number,
    centeredV: boolean,
    centeredH: boolean,
}

export interface StaticWidgets {
    [key: string]: Widget,
}
