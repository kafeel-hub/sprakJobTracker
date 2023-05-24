
import { takeEvery, put } from 'redux-saga/effects';
import { addJob, updateJob, deleteJob} from './job.reducer';

function* addJobSaga(action) {
  yield put(addJob(action.payload));
}

function* updateJobSaga(action) {
  yield put(updateJob(action.payload));
}

function* deleteJobSaga(action) {
  yield put(deleteJob(action.payload));
}

function* studentSaga() {
  yield takeEvery('job/addJobSaga', addJobSaga);
  yield takeEvery('job/updateJobSaga', updateJobSaga);
  yield takeEvery('job/deleteJobSaga', deleteJobSaga);
}

export default studentSaga;
