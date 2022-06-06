import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: {
    location: { lat: 21.459419, lng: 83.974327 }, // By default set to origin we can change this to null
    description: "Sambalpur, Odisha, 765001",
  },
  destination: null,
  travelInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigins: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelInformation: (state, action) => {
      state.travelInformation = action.payload;
    },
  },
});

export const { setOrigins, setDestination, setTravelInformation } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelInformation = (state) => state.nav.travelInformation;

export default navSlice.reducer;
