import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    loading: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Burada thunklar üçün extra reducers əlavə edə bilərsən
    }
});

export default appSlice.reducer;
