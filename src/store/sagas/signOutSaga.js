import { takeEvery, call, put } from 'redux-saga/effects'
import firebase from '../../Firebase'

const auth = firebase.auth()

const signOutApi = async () => {
    await auth.signOut()
    console.log("Signed OUT")
}

function* workerSignOut() {

    try {
        yield call(signOutApi)
        yield put({ type: "SIGN_OUT_SUCCESS" })
    }
    catch (err) {
        yield put({ type: "SIGN_OUT_ERROR" })
    }
}

export default function* watchSignOut() {

    yield takeEvery("SIGN_OUT", workerSignOut)

}