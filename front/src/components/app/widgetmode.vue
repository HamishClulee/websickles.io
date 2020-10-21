<template>

    <section
        class="app-mode-container widget-mode-container"
        id="widget-mode-container"
        @dragstart="dragstart"
        @drop="dropped"
        @dragenter.prevent
        @dragover.prevent
    >

        <widgetcontent
            class="widget-mode-content"
            :outline="outline"
            id="widget-content-panel"
        ></widgetcontent>

        <widgetmenu></widgetmenu>
        
    </section>
</template>

<script>
import widgetmenu from './widgetmenu'
import widgetcontent from './widgetcontent'
import { mapGetters, mapMutations } from 'vuex'
import { NAVBAR, HEADER, CONTENT_BLOCKS } from '@I/IWidgetNames'
import { WgtState } from '@I/IState'
export default {
    name: 'widgetmode',
    components: {
        widgetmenu,
        widgetcontent,
    },
    data() {
        return {
            NAVBAR: NAVBAR,
            HEADER: HEADER,
            outline: {
                [NAVBAR]: false,
                [HEADER]: false,
            },
        }
    },
    methods: {

        ...mapMutations(['SET_STATIC_STATE']),

        dragstart(event) {

            this.SET_STATIC_STATE({
                elementID: event.target.id,
                wgtState: WgtState.Dragging,
            })

            if (this.getCurrentDrag === HEADER) this.outline[HEADER] = true
            if (this.getCurrentDrag === NAVBAR) this.outline[NAVBAR] = true

        },

        dropped(event) {

            if (this.isDragging && event.target.id === 'widget-content-panel') {
    
                this.SET_STATIC_STATE({
                    elementID: this.getCurrentDrag,
                    wgtState: WgtState.Placed,
                })

            } else {

                this.SET_STATIC_STATE({
                    elementID: this.getCurrentDrag,
                    wgtState: WgtState.Dormant,
                })

            }

            this.outline[this.getCurrentDrag] = false

        },
    },
    computed: {
        ...mapGetters(['getCurrentDrag', 'getAllStatic', 'getStaticWidget']),

        isDragging() {
            return this.getCurrentDrag !== '' && this.getCurrentDrag
        },

    },
}
</script>

<style lang="sass" scoped></style>