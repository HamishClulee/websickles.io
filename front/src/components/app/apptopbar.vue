<template>
    <nav class="create-topbar-container">


        <!-- ${getuser.subdom} -->
        <div class="top-bar-left">
            <div class="logo-con" @click="routehome($route.name !== 'home' ? 'home' : null)">
                <img src="/images/pop-logo.png" class="pop-logo-actual" />
            </div>
            <a
                :href="`https://not-yet-implemented.websickles.io`"
                target="_blank"
                class="top-bar-middle"
            >
                <h6 class="h6">https://not-yet-implemented.websickles.io</h6>
            </a>
        </div>

        <div class="top-bar-right">

            <button class="button link top-bar-item-container" @click="$emit('save')">
                SAVE
            </button>

            <button class="button secondary top-bar-item-container" @click="$emit('preview')">
                PREVIEW
            </button>

            <button class="button secondary top-bar-item-container" @click="$emit('publish')">
                PUBLISH
            </button>

            <div class="hamburger" v-if="!showdrawer" @click="showdrawer = true">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div class="big-x" v-else @click="showdrawer = false">
                <div class="line"></div>
                <div class="line"></div>
            </div>

            <rightdrawer v-if="showdrawer" @closedrawer="showdrawer = false"></rightdrawer>

        </div>

    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import rightdrawer from './rightdrawer'
export default {
    name: 'createtopbar',
    components: {
        rightdrawer,
    },
    data () {
        return {
            showdrawer: false,
        }
    },
    methods: {
        routehome () {
            this.$router.push({ name: 'home'})
        },
    },
    computed: {
        ...mapGetters(['getuser']),
    },
}
</script>

<style lang="sass" scoped>
.options
    border: none
.button
    margin: 0 10px
.h6
    color: $link
    margin-left: 20px
    font-size: 1.2em
    margin-bottom: 5px
.top-bar-middle
    width: 100%
.top-bar-right
    display: flex
    flex-direction: row
    align-items: center
    width: 39%
    justify-content: flex-end
.create-topbar-container
    height: 60px
    display: flex
    flex-direction: row
    align-items: center
    background-color: white
    opacity: 0.8
    z-index: 9
    position: fixed
    top: 0
    width: 100%
    box-shadow: 0 1px 2px rgba(0,0,0,0.24)
    border-bottom: 1px solid $very-light-gray
    height: $navbar-height
    &:before
        content: ''
        width: 100%
        height: 3px
        background: linear-gradient(90deg, hsla(29, 100%, 47%, 1) 0%, hsla(342, 42%, 51%, 1) 100%)
        position: fixed
        top: 0
.top-bar-left
    display: flex
    flex-direction: row
    align-items: center
    background-color: transparent
    width: 60%
.logo-con
    display: flex
    align-items: center
    cursor: pointer
    margin-left: 10px
    margin-right: 10px
    &:hover
        opacity: 0.8
.pop-logo-actual
    width: 30px
.top-bar-item-container
    width: 70px
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    cursor: pointer
    &:hover
        opacity: 0.8
.hamburger
    display: flex
    flex-direction: column
    width: 50px
    height: 80px
    align-items: flex-end
    justify-content: center
    cursor: pointer
    margin-right: 20px
    .line
        height: 2px
        width: 25px
        background-color: $font
        margin-top: 4px
.big-x
    cursor: pointer
    padding: 10px
    &:hover
        opacity: 0.8
    .line
        background-color: $font
        transform: rotate(-45deg)
        transition: all 1s ease
        &:first-child
            transition: all 1s ease
            transform: rotate(45deg)
            position: relative
            top: 2px
        height: 2px
        width: 20px
</style>