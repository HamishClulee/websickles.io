<template>
    <footer class="qr-footer" :class="$route.path.split('/')[1] === 'docs' ? 'docs-footer' : 'normal-footer'">
        <figure class="logo-container">
            <img
                src="/images/pop-logo.png"
                alt="Create Mevn Logo"
                width="100%"
            />
        </figure>
        <div class="tilde-spacer">~</div>
        <div class="text-container">
            <h4 class="h4">WEBSICKLES.IO</h4>
        </div>
        <div class="tilde-spacer">~</div>
        <div class="text-container sub">
            <h4 class="h4">Make Life Easy</h4>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'qrfooter',
}
</script>

<style lang="sass" scoped>
.docs-footer
    margin-left: $docs-sidebar-width
.normal-footer
    width: 98%
    margin-left: auto
    height: 30vh
    min-height: 400px
.qr-footer
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    // min-width: 400px
    margin-right: auto
    .logo-container
        width: 20%
        display: flex
        height: 200px
        margin-right: 2em
        img
            transform: rotateZ(90deg)
            width: 100px
            margin-left: 90px
    .text-container
        display: flex
    .tilde-spacer
        display: flex
        align-items: center
        justify-content: center
        font-size: 3.5em
        margin: 0 20px 0 5px
        color: $light-gray
    .sub
        color: $medium-gray
</style>