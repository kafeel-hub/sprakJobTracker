
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'job',
  initialState: [],
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    updateJob: (state, action) => {
      const { id, updateJobData } = action.payload;
      const jobIndex = state.findIndex(job => job.id === id);
      if (jobIndex !== -1) {
        state[jobIndex] = { ...state[jobIndex], ...updateJobData };
      }
    },
    deleteJob: (state, action) => {
      const jobIndex = state.findIndex(job => job.id === action.payload);
      if (jobIndex !== -1) {
        state.splice(jobIndex, 1);
      }
    },
  },
});

export const { addJob, updateJob, deleteJob } = studentSlice.actions;
export default studentSlice.reducer;
