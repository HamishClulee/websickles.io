<template>
    <footer class="qr-footer" :class="isWapp ? 'wapp-footer' : 'standard-footer'">
        <div v-if="displayPushed" class="footer-content layout-row layout-center-all" :class="displayPushed ? 'in-view' : 'hidden'">
            <img
                src="/images/pop-logo.png"
                alt="Create Mevn Logo"
                width="100%"
                class="logo"
            />
            <div class="text-container layout-col">
                <h4 class="main">WEBSICKLES.IO</h4>
                <h4 class="sub">Make Life Easy</h4>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'qrfooter',
    data() {
        return {
            displayPushed: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.displayPushed = true
        }, 500)
    },
    computed: {
        isWapp() {
            return this.$route.name === 'wapp'
        },
    },
}
</script>

<style lang="sass" scoped>
.footer-content
    transition: all 1.5s ease
    opacity: 0
    &.in-view
        opacity: 1
    &.hidden
        opacity: 0
.qr-footer
    height: 10vh
    min-height: 200px
    align-items: center
    justify-content: center
    opacity: 0.7
    .logo
        width: 60px
        margin-right: 25px
    .text-container
        justify-content: flex-end
        h4
            margin-top: 0
            margin-bottom: 10px
        .sub
            color: $medium-gray
</style>    