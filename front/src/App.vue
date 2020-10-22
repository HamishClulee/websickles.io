<template>
	<section class="app-main">

		<!-- GLOBAL SPINNER -->
        <transition name="fade" mode="out-in">

            <div v-show="showGlobalSpinner" class="global-spinner-con">
                <loading></loading>
            </div>

        </transition>


		<!-- APP ACTUAL -->

        <div v-show="!showGlobalSpinner">

            <sitemodal v-if="showsitemodal" v-bind="{ contains }"></sitemodal>

            <navbar v-if="checkroute"></navbar>

            <router-view ></router-view>

            <qrfooter v-if="showfooter"></qrfooter>

        </div>
            

        <usermessages v-bind="{ msg, black, sass }" v-if="showUserMessage"></usermessages>

        <sitemodal contains="smallscreen" v-if="windowWidth < 620"></sitemodal>
        
	</section>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import navbar from './components/nav/navbar.vue'
import qrfooter from './components/nav/qrfooter.vue'
import usermessages from './components/usermessages.vue'
import loading from './components/loading.vue'
// import debounce from './utils/functions'
import sitemodal from './components/sitemodal/sitemodal.vue'

import { mapGetters, mapMutations } from 'vuex'

import { 
    EventBus,
    LOADING,
    MESSAGES,
    SITEMODAL,
    EDITOR_ERROR,
    NEED_TO_BE_LOGGED_IN,
    LOGGED_IN_WITH_GOOGLE,
} from './EventBus'

export default defineComponent({
    name: 'TheGodFather',
    components: {
        navbar,
        qrfooter,
        sitemodal,
        loading,
        usermessages,
    },
    data () {

        return {
            showsitemodal: false,
            showGlobalSpinner: false,
            contains: null,
            loadPushed: false,
            showUserMessage: false,
            msg: '',
            sass: '',
            black: '',
        }

    },
    created() {
        // set state ui vars
        this.SET_WINDOW_SIZE()
        this.SET_SCROLL_LOCATION()
    },
    mounted () {

        // EventBus handling global loading spinner, user message pop up and site wide modals
        EventBus.on(LOADING, is => { this.showGlobalSpinner = is })

        EventBus.on(MESSAGES, deets => {
            this.showUserMessage = deets.is
            this.msg = deets.msg
            this.sass = deets.color
        })

        EventBus.on(SITEMODAL, (type = null) => {
            if (type) {
                this.contains = type
                this.showsitemodal = true
            } else {
                this.showsitemodal = false
            }
        })

        // For auth failure redirects from ExpressJS
        const para = new URLSearchParams(window.location.search)
        if (para.get('redirect') === 'true') {

            EventBus.emit(MESSAGES, NEED_TO_BE_LOGGED_IN)

            this.$router.push({ path: '/auth/login?redirect=true' })
        }

        if (para.get('googleauth') === 'true') {

            EventBus.emit(MESSAGES, LOGGED_IN_WITH_GOOGLE)
            this.$router.push({ path: '/app' })
            
        }

        window.addEventListener('resize', this.sizeChange)
        window.addEventListener('scroll', this.scrollChange)

    },
    methods: {
        ...mapMutations(['SET_WINDOW_SIZE', 'SET_SCROLL_LOCATION']),
        sizeChange() {
            this.SET_WINDOW_SIZE()
        },
        scrollChange() {
            this.SET_SCROLL_LOCATION()
        },
    },
    computed: {
        checkroute() {
            return this.$route.name !== 'wapp'
        },
        showfooter() {
            return this.$route.name !== 'auth'
        },
        ...mapGetters(['windowWidth']),
    },
})
</script>

<style lang="sass" scoped>
.app-main
    min-height: 100vh !important
.global-spinner-con
    height: 100vh
    min-height: 800px
    display: flex
    align-items: center
    justify-content: center
    width: 100%
</style>
