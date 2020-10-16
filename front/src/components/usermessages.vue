<template>
    <transition name="fade" mode="out-in">
        <div class="message-container layout-col" :class="sass">
            <div class="close-icon-row layout-row">
                <div class="icon-spacer"></div>
                <div class="close-icon layout-row" @click="closeNow">x</div>
            </div>
            <div class="message-actual">{{ msg }}</div>
            <div class="ttl-indicator"></div>
        </div>
    </transition>
</template>

<script>

import { 
    EventBus,
    MESSAGES,
} from '../EventBus.ts'

const TIME_TO_LIVE = 7000

export default {
    name: 'usermessages',
    props: {
        sass: {
            type: String,
            validator: (value) => {
                return ['success', 'warning', 'error', 'info', ''].indexOf(value) !== -1
            },
        },
        msg: {
            required: true,
            type: String,
        },
    },
    mounted() {
        setTimeout(() => {
            this.closeNow()
        }, TIME_TO_LIVE)
    },
    methods: { 
        closeNow() {
            EventBus.$emit(MESSAGES, { is: false })
        }, 
    },
}
</script>

<style scoped lang="sass">
.close-icon-row
    width: 100%
    height: 20px
    font-size: 1em
.icon-spacer
    width: 95%
.ttl-indicator
    width: 100%
    animation: slide-down 7s ease 1
    height: 3px
    background: black
    opacity: 0.2
.close-icon
    width: 10%
    font-size: 1em
    align-items: flex-end
    justify-content: flex-end
    margin: 28px 16px 0 0
    transform: scaleX(1.5)
    &:hover
        opacity: 0.8
        cursor: pointer
.message-container
    position: fixed
    bottom: 20px
    left: 20px
    padding: 0
    border-radius: 3px
    border: 1px solid $light-gray
    font-family: $body-font
    font-size: 1.3em
    z-index: 6
.message-actual
    padding: 0 40px 15px 40px
.success
    background: $success
    color: $off-white
.warning
    background: $high-contrast
    color: $primary
.error
    background: $highlight
    color: $off-white
.info
    background: $link
    color: $off-white
.white
    background: $off-white
    color: $primary

@keyframes slide-down
    0%
        width: 100%
    100%
        width: 0
</style>