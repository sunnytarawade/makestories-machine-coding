import {takeEvery, call, put, take } from 'redux-saga/effects'
import signUpApi from '../api/signUpApi'

function* workerSignUp(action){
    try{
        const user = yield call(signUpApi,action.payload)
        yield put({type: "SIGN_UP_SUCCESS",payload: user})
        yield put({ type: "LOADING_STOP" })
        yield put({type:"SIGN_OUT"})
    }
    catch(err){
        yield put({type:"SIGN_UP_ERROR"})
    }
}

export default function* watchSignUp(){
    const user = yield takeEvery("SIGN_UP",workerSignUp)
}