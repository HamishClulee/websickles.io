import mitt from 'mitt'

export const EventBus = mitt()

export const LOADING = 'LOADING'
export const MESSAGES = 'MESSAGES'
export const SITEMODAL = 'SITEMODAL'
export const SERVER_AUTH_ERROR_MESSAGE = 'SERVER_AUTH_ERROR_MESSAGE'
export const EDITOR_ERROR = 'EDITOR_ERROR'
export const SWITCH_APP_MODE = 'SWITCH_APP_MODE'

export const SAVE_SUCCESS_PL = {
    is: true,
    msg: 'Saved!',
    color: 'success',
}

export const PUBLISH_SUCCESS_PL = {
    is: true,
    msg: 'Published!',
    color: 'success',
}

export const LOGGED_OUT = {
    is: true,
    msg: 'You are now logged out!',
    color: 'success',
}

export const welcomeback = (email: string) => {
    return {
        is: true,
        msg: `Welcome back ${email}!`,
        color: 'info',
    }
}

export const EMAIL_VERIFY_FAILURE = {
    is: true,
    msg: 'Something went wrong, we have been notified, try again soon!',
    color: 'error',
}

export const NEED_TO_BE_LOGGED_IN = {
    is: true,
    msg: 'You need to be logged in to view that page!',
    color: 'warning',
}

export const LOGGED_IN_WITH_GOOGLE = {
    is: true,
    msg: 'Logged in with Google!',
    color: 'info',
}

export const alreadyloggedinas = (email: string) => {

    return {
        is: true,
        msg: `You are already logged in as ${email}!`,
        color: 'warning',
    }

}

export const emailsentto = (email: string) => {
    return {
        is: true,
        msg: `We have sent you an email at ${email}!`,
        color: 'info',
    }
}