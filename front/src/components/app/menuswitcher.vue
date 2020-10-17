<template>
    <section class="menu-switcher-container" @click="showmenus = !showmenus">
        <h6>MODE</h6>

        <div class="menu-buttons-container layout-row" :class="showmenus ? 'animate-out' : 'animate-in'">
            <div class="menu-item widget layout-center-all" @click="switchMode(WIDGET_MODE)">
                W
            </div>
            <div class="menu-item detail layout-center-all" @click="switchMode(DETAILS_MODE)">
                D
            </div>
            <div class="menu-item meta layout-center-all" @click="switchMode(META_MODE)">
                M
            </div>
        </div>

    </section>
</template>

<script>
import { META_MODE, DETAILS_MODE, WIDGET_MODE } from '../../utils/constants'
import { EventBus, SWITCH_APP_MODE } from '../../EventBus'
export default {
    name: 'menuswitcher',
    data() {
        return {
            showmenus: false,
            META_MODE: META_MODE,
            DETAILS_MODE: DETAILS_MODE,
            WIDGET_MODE: WIDGET_MODE,
        }
    },
    methods: {
        switchMode(mode) {
            EventBus.$emit(SWITCH_APP_MODE, mode)
            this.showmenus = false
        },
    },
}
</script>

<style lang="sass" scoped>
.menu-switcher-container
    position: fixed
    z-index: 200
    bottom: $wapp-menu-height
    right: 0
    width: 100px
    height: 67px
    background: $primary
    display: flex
    justify-content: flex-end
    align-items: flex-end
    color: white
    border-radius: 90px 0 0 0
    cursor: pointer
    h6
        padding: 20px
.menu-buttons-container
    background: transparent
    border: 1px solid tint($primary, 60%)
    border-radius: 20px 0 0 0
    position: absolute
    bottom: 0
    right: 0
    height: 65px
    padding-left: 5px
    align-items: center
    &.animate-out
        width: 307px
        animation: slide 0.3s ease-out
        animation-iteration-count: 1
    &.animate-in
        width: 0
        animation: slide-reverse 0.3s ease-in
        animation-iteration-count: 1
.menu-item
    border-radius: 50%
    height: 60px
    width: 60px
    margin: 0 3px
    display: flex
    transition: all 0.3s cubic-bezier(.25,.8,.25,1)
    &:hover
        box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)
.widget
    background: $secondary
.meta
    background: $tertiary
.detail
    background: $additional

@keyframes slide
  0%
    width: 0
    opacity: 0
  100%
    width: 307px
    opactity: 1

@keyframes slide-reverse
  0%
    width: 307px
    opacity: 1
  100%
    width: 0
    opactity: 0
</style>