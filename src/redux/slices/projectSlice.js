
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    projectInfo: null,
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProjectInfo(state, action) {
            state.projectInfo = action.payload.project
        },
    },
});

export const { setProjectInfo } = projectSlice.actions;
export default projectSlice.reducer;
