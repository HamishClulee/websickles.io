<template>
    <section class="app-mode-container detail-mode-container">
        <h1>DETAILS MODE</h1>
        <detailsmenu></detailsmenu>
    </section>
</template>

<script>
import detailsmenu from './detailsmenu'
export default {
    name: 'detailmode',
    components: { detailsmenu },
}
</script>

<style lang="sass" scoped>
</style>