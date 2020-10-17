<template>
    <section class="widget-content-container" @dragenter.prevent="dragenter($event)" @drop="dragend($event)">

        <section
            class="navbar layout-center-all layout-col"
            v-if="getWidget(NAVBAR).state === 'DRAGGING' || getWidget(NAVBAR).state === 'PLACED'"
            :class="{ 'outline' : outline[NAVBAR], 'placed': getWidget(NAVBAR).state === 'PLACED'}"
        ></section>

        <section
            class="header layout-center-all layout-col"
            v-if="getWidget(HEADER).state === 'DRAGGING' || getWidget(HEADER).state === 'PLACED'"
            :class="{ 'outline' : outline[HEADER], 'placed': getWidget(HEADER).state === 'PLACED'}"
        ></section>

    </section>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import { NAVBAR, HEADER } from '@I/IWidgetNames'
export default {
    name: 'widgetcontent',
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

        ...mapMutations([
            'SET_WIDGET_STATE',
        ]),

        dragenter(event) {

            if (this.getCurrentDrag === HEADER) this.outline[HEADER] = true
            if (this.getCurrentDrag === NAVBAR) this.outline[NAVBAR] = true

        },

        dragend(ev) {

            this.SET_WIDGET_STATE({
                elementID: this.getCurrentDrag,
                wgtState: 'PLACED',
            })
            this.outline[this.getCurrentDrag] = false
        },

    },
    computed: {
        ...mapGetters(['getCurrentDrag', 'getWidgets', 'getWidget']),

        isDragging() {
            return this.getCurrentDrag !== '' && this.getCurrentDrag
        },

    },
}
</script>

<style lang="sass" scoped>
.widget-content-container
    width: 100%
    min-height: 100vh
.outline
    background: $light-gray
    border: 1px solid $medium-gray
    border-radius: 5px
.header
    height: 300px
.navbar
    height: 80px
</style>