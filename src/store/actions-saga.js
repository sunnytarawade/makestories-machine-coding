let testAction = (payload) => {
    return {
        type: "TEST",
        payload
    }
}

let signInAction = (userCredentials) => {
    return {
        type: "SIGN_IN",
        payload: userCredentials
    }
}

let signUpAction = (userCredentials) => {
    return {
        type: "SIGN_UP",
        payload: userCredentials
    }
}

let signOutAction = () => {
    return {
        type: "SIGN_OUT"
    }
}

let editDetailsAction = (userCredentials) => {
    return {
        type: "EDIT_DETAILS",
        payload: userCredentials
    }
}


export { testAction, signInAction, signUpAction, editDetailsAction, signOutAction }