<template>
    <main class="app-container">
    
        <apptopbar></apptopbar>

        <keep-alive>
            <menuswitcher></menuswitcher>
        </keep-alive>


        <section class="app-content-panel">

            <widgetmode v-show="app_mode === 'WIDGET_MODE'"></widgetmode>

            <detailmode v-show="app_mode === 'DETAILS_MODE'"></detailmode>

            <metamode v-show="app_mode === 'META_MODE'"></metamode>

        </section>
    </main>
</template>

<script>
import apptopbar from '../components/app/apptopbar'
import menuswitcher from '../components/app/menuswitcher'
import widgetmode from '../components/app/widgetmode'
import detailmode from '../components/app/detailmode'
import metamode from '../components/app/metamode'
import { EventBus, SWITCH_APP_MODE } from '../EventBus'
import { META_MODE, DETAILS_MODE, WIDGET_MODE } from '../utils/constants'
export default {
    name: 'wapp',
    components: {
        apptopbar,
        menuswitcher,
        widgetmode,
        detailmode,
        metamode,
    },
    data() {
        return {
            app_mode: 'WIDGET_MODE',
            WIDGET_MODE: WIDGET_MODE,
            DETAILS_MODE: DETAILS_MODE,
            META_MODE: META_MODE,
        }
    },
    mounted() {
        EventBus.on(SWITCH_APP_MODE, mode => {
            this.app_mode = mode
        })
    },
}
</script>

<style scoped lang="sass">
h1
    color: $primary
.app-content-panel
    margin-top: $navbar-height
</style>