import { take, takeEvery, call, put, select } from 'redux-saga/effects'
import signInApi from '../api/signInApi'



function* workerSignIn(action) {

    try {
        const user = yield call(signInApi, action.payload)
        yield put({ type: "SIGN_IN_SUCCESS", payload: user })
        yield put({ type: "LOADING_STOP" })
    }
    catch (err) {
        yield put({ type: "SIGN_IN_ERROR" })
    }
}

export default function* watchSignIn() {

    const action = yield takeEvery("SIGN_IN", workerSignIn)

}