import { call, takeEvery, put } from 'redux-saga/effects'
import editDetailsApi from '../api/editDetailsApi'

function* workerEditDetails(action) {
    try {
        const user = yield call(editDetailsApi, action.payload)
        yield put({ type: "EDIT_DETAILS_SUCCESS", payload: user })
        yield put({ type: "LOADING_STOP" })
    }
    catch (err) {
        yield put({ type: "EDIT_DETAILS_ERROR" })
    }
}

export default function* watchEditDetails() {

    console.log("Work")
    const action = yield takeEvery("EDIT_DETAILS", workerEditDetails)

}
