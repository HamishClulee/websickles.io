<template>
    <footer class="qr-footer layout-row">
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
}
</script>

<style lang="sass" scoped>
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