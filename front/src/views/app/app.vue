<template>
    <main class="app-container">
        <apptopbar></apptopbar>
        <section class="app-content-panel">
            Placeholder
        </section>
    </main>
</template>

<script>
import apptopbar from './apptopbar'
export default {
    name: 'app',
    components: {
        apptopbar,
    },
}
</script>

<style scoped lang="sass">
h1
    color: $primary
.app-content-panel
    padding-top: 80px
    min-height: 100vh
</style>