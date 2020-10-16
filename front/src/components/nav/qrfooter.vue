<template>
    <footer class="qr-footer layout-row" :class="isWapp ? 'wapp-footer' : 'standard-footer'">
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
    </footer>
</template>

<script>
export default {
    name: 'qrfooter',
    computed: {
        isWapp() {
            return this.$route.name === 'wapp'
        },
    },
}
</script>

<style lang="sass" scoped>
.wapp-footer
    margin-bottom: $wapp-menu-height
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