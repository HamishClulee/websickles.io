<template>
    <section class="app-mode-container widget-mode-container">
        <widgetcontent id="widget-content" class="widget-mode-content" :insertheader="insertheader"></widgetcontent>
        <widgetmenu></widgetmenu>
    </section>
</template>

<script>
import widgetmenu from './widgetmenu'
import widgetcontent from './widgetcontent'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'widgetmode',
    components: {
        widgetmenu,
        widgetcontent,
    },
    data() {
        return {
            insertheader: false,
        }
    },
    mounted() {
        document.getElementById('widget-content').addEventListener('dragenter', this.dragenter)
    },
    methods: {
        ...mapMutations(['SET_CURRENTLY_DRAGGED']),
        dragenter(it, ev) {
            if (this.getCurrentDrag === 'headerdrag') {
                this.insertheader = true
            }

        },
    },
    computed: {
        ...mapGetters(['getCurrentDrag']),
    },
}
</script>

<style lang="sass" scoped>
.widget-mode-content
    width: 100%
    min-height: 100vh
</style>