<template>
    <section class="widget-menu-con">

        <!-- @dragend="dragend_handler" @dragenter="dragenter" -->
        <button class="widget-button" id="headerdrag" draggable="true" @dragstart="dragstart_handler">
            header
        </button>

    </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'widgetmenu',
    methods: {
        ...mapMutations(['SET_CURRENTLY_DRAGGED']),
        dragstart_handler(ev) {
            this.SET_CURRENTLY_DRAGGED(ev.target.id)            
            // debugger
        },
        // dragend_handler(ev) {
        //     debugger
        // },
        // dragenter(it, ev) {
        //     debugger
        // },
    },
}
</script>

<style lang="sass" scoped>
.widget-menu-con
    padding: 5px
    font-family: $body-font
    height: 120px
    border-top: 1px solid $light-gray
    display: flex
    align-items: center
    justify-content: flex-start
    flex-direction: row
    position: fixed
    bottom: 0
    left: 0
    right: 0
    box-shadow: 0 1px 2px rgba(0,0,0,0.24)
    background: white
    z-index: 5
.widget-button
    cursor: pointer
    height: 80px
    width: 80px
    border-radius: 5px
    box-shadow: 0px 3px 3px rgba(0,0,0,0.2)
    margin: 8px
    border: 1px solid darken(#efefef, 10)
    padding: 15px
    font-family: $body-font
.active-button
    border-top: 2px solid $secondary 
.inactive-button
    display: flex
    border-bottom: 2px solid $light-gray
.bold
    background: center / contain no-repeat url("/svg/bold.svg")
    background-size: unset
.italic
    background: center / contain no-repeat url("/svg/italic.svg")
    background-size: unset
#undo
    background: center / contain no-repeat url("/svg/undo.svg")
    background-size: unset
#redo
    background: center / contain no-repeat url("/svg/redo.svg")
    background-size: unset
.times
    background: center / contain no-repeat url("/svg/times.svg")
    background-size: unset
    border-bottom: 2px solid $secondary
.link
    background: center / contain no-repeat url("/svg/link.svg")
    background-size: unset
.list
    background: center / contain no-repeat url("/svg/list.svg")
    background-size: unset
#increaseListLevel
    background: center / contain no-repeat url("/svg/list-indent.svg")
    background-size: unset
.image
    background: center / contain no-repeat url("/svg/image.svg")
    background-size: unset
.remove-formatting
    background: center / contain no-repeat url("/svg/cancel.svg")
    background-size: unset
.color
    background: center / contain no-repeat url("/svg/palette.svg")
    background-size: unset
    border-bottom: 2px solid $light-gray
.fontsize
    background: center / contain no-repeat url("/svg/text-size.svg")
    background-size: unset
</style>