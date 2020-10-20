import { all } from 'redux-saga/effects'
import watchSignIn from './signInSaga'
import watchSignUp from './signUpSaga'
import watchSignOut from './signOutSaga'
import watchEditDetails from './editDetailsSaga'

export default function* rootSaga() {

    yield all([watchSignIn(), watchSignUp(), watchEditDetails(), watchSignOut()])

}