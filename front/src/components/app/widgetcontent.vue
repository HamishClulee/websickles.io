<template>
    <section class="content-container">
        <div v-if="insertheader" class="header-outline"></div>
    </section>
</template>

<script>
export default {
    name: 'widgetcontent',
    props: {
        insertheader: {
            type: Boolean,
            required: true,
        },
    },
}
</script>

<style lang="sass" scoped>
.header-outline
    height: 200px
    background: $light-gray
    border: 1px solid $medium-gray
    border-radius: 5px
</style>