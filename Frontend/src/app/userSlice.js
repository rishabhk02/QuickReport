import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'UserInfo',
    initialState: {
        policeStationDetail: {},
        vehicleComplains: [],
        generalTheftComplains: [],
        kidnappingComplains: []
    },
    reducers: {
        addVehicleComplains: (state, action) => {
            state.vehicleComplains = action.payload;
        },
        addGeneralTheftComplains: (state, action) => {
            state.generalTheftComplains = action.payload;
        },
        addKidnappingComplains: (state, action) => {
            state.kidnappingComplains = action.payload;
        },
    }
});

export const { addVehicleComplains, addGeneralTheftComplains, addKidnappingComplains } = userSlice.actions;
export default userSlice.reducer;