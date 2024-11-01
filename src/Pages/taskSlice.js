import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: [],
    },
    reducers: {
        getTask(state, action) {
            state.task = action.payload;
        },
    },
});

// Corrected 'action' to 'actions'
export const { getTask } = taskSlice.actions;
export default taskSlice.reducer;
