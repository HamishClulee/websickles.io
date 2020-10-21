<template>
    <section id="widget-content-container" class="widget-content-container">

        <section
            class="navbar layout-center-all layout-col layout-center-all"
            v-if="shouldDisplay(NAVBAR)"
            :class="{
                'outline' : outline[NAVBAR],
                'placed': getStaticWidget(NAVBAR).state === 'PLACED'
            }"
        ><h5>navbar</h5></section>

        <section
            class="header layout-center-all layout-col layout-center-all"
            v-if="shouldDisplay(HEADER)"
            :class="{
                'outline' : outline[HEADER],
                'placed': getStaticWidget(HEADER).state === 'PLACED',
            }"
        ><h5>header / banner</h5></section>

        <!--  -->
        <section
            v-for="(content, index) in getContentBlocks"
            :key="index"
            class="content-block layout-center-all layout-col layout-center-all"

        ><h5>content block</h5></section>

    </section>
</template>

<script>

import { mapGetters } from 'vuex'
import { NAVBAR, HEADER, CONTENT_BLOCKS } from '@I/IWidgetNames'
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
            CONTENT_BLOCKS: CONTENT_BLOCKS,
        }
    },
    methods: {
        isPending(type) {
            return 
            this.getStaticWidget(type).state === 'DRAGGING'
            && this.getStaticWidget(type).state !== 'PLACED'
        },
        isPlaced(type) {
            return this.getStaticWidget(type).state === 'PLACED'
        },
        shouldDisplay(type) {
            return this.isPending(type) || this.isPlaced(type)
        },
    },
    computed: {

        ...mapGetters([
            'getCurrentDrag',
            'getAllStatic',
            'getStaticWidget',
            'getContentBlocks',
        ]),

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
    background: tint($success, 50)
.header
    height: 300px
    &.pull-up
.navbar
    height: 80px
</style>