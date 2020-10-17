<template>
    <section class="app-mode-container widget-mode-container" id="widget-mode-container">

        <widgetcontent
            class="widget-mode-content"
        ></widgetcontent>

        <widgetmenu></widgetmenu>
        
    </section>
</template>

<script>
import widgetmenu from './widgetmenu'
import widgetcontent from './widgetcontent'
export default {
    name: 'widgetmode',
    components: {
        widgetmenu,
        widgetcontent,
    },
}
</script>

<style lang="sass" scoped></style>