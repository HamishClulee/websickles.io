<template>
    <section id="widget-content-container" class="widget-content-container">

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

import { mapGetters } from 'vuex'
import { NAVBAR, HEADER } from '@I/IWidgetNames'
export default {
    name: 'widgetcontent',
    props: {
        outline: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            NAVBAR: NAVBAR,
            HEADER: HEADER,
        }
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
.placed
    background: $secondary
.header
    height: 300px
.navbar
    height: 80px
</style>