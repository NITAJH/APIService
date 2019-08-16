import { CUSTOMER_ISLOGIN } from './action'

const initStore = {
    isUserLoggedIn: false
}

export default function (state = initStore, action) {
    switch (action.type) {
        case CUSTOMER_ISLOGIN:
            return { ...state, isUserLoggedIn: !state.isUserLoggedIn }
        default:
            return { ...state }

    }
}
