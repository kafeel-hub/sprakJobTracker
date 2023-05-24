
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import jobReducer from './job.reducer';
import jobSaga from './job.saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    job: jobReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(jobSaga);

export default store;
