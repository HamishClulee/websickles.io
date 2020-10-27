import { Store } from 'vuex'
import { State } from '../interfaces/IState'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}