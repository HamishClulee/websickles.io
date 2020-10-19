<template>
    <section class="widget-menu-con">

        <!-- icon = value.iconPath -->
        <!-- @dragend="dragend_handler" @dragenter="dragenter" -->
        <button
            v-for="(value, name, index) in getWidgets"
            :key="index" 
            class="widget-button"
            :id="name"
            draggable="true"
        >{{ name }}</button>

    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'widgetmenu',
    computed: {
        ...mapGetters(['getWidgets']),
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
</style>