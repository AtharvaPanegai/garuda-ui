
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    projectInfo: null,
    allprojects: null
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProjectInfo(state, action) {
            state.projectInfo = action.payload.project
        },
        setAllProjects(state, action) {
            state.allprojects = action.payload.projects
        }
    },
});

export const { setProjectInfo, setAllProjects } = projectSlice.actions;
export default projectSlice.reducer;
