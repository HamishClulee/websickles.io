import { GetterTree } from 'vuex'
import { StaticWidgets, ContentWidget, State } from '../../interfaces/IState'
import { QUser } from '../../interfaces/IUser'

export type Getters = {
    windowWidth (state: State): number,
    windowHeight (state: State): number,
    scrollY (state: State): number,
    isauthed (state: State): boolean,
    getuser (state: State): QUser['user'],
    getCurrentDrag (state: State): string,
    getAllStatic (state: State): StaticWidgets,
    getStaticWidget (state: State): any,
    getContentBlocks (state: State): Array<ContentWidget>,
}

export const getters: GetterTree<State, State> & Getters = {
    windowWidth: (state: State): number => state.ui.windowWidth || 0,
    windowHeight: (state: State): number => state.ui.windowHeight || 0,
    scrollY: (state: State): number => state.ui.scrollY || 0,
    isauthed: (state: State): boolean => state.user.authed || false,
    getuser: (state: State) => state.user,
    getCurrentDrag: (state: State): string => state.drag.current || '',
    getAllStatic: (state: State) => state.static,
    getStaticWidget: (state: State) => (name: string) => state.static[name],
    getContentBlocks: (state: State) => state.content,
}

