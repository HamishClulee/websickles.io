<template>
  <section
    class="section display-section-container"
    :style="isFooter ? { height: '40vh', minHeight: '40vh' } : null"
    :class="sassclass">
      <slot></slot>
  </section>
</template>

<script>
export default {
    name: 'displaysection',
    props: {
        sassclass: {
            required: true,
            type: String,
        },
        isFooter: {
            required: false,
            default: false,
            type: Boolean,
        },
    },
}
</script>

<style lang="sass" scoped>
.display-section-container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    height: 100vh
    min-height: 800px
    padding: 0 10%
.primary
    background-color: $primary
    color: $off-white
.secondary
    background-color: $secondary
    color: $off-white
.tertiary
    background-color: $tertiary
    color: $off-white
.highlight
    background-color: $highlight
    color: $off-white
.white
    background-color: white
    color: $font
.additional
    background-color: $additional
    color: $off-white
.high-contrast
    background-color: $high-contrast
    color: $font
.off-white
    background-color: $off-white
    color: $font
</style>