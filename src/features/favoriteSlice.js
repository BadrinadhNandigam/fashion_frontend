import { createSlice } from "@reduxjs/toolkit";

const savedFavorites =
  JSON.parse(
    localStorage.getItem("favorites")
  ) || [];


const favoriteSlice = createSlice({

  name: "favorites",

  initialState: savedFavorites,

  reducers: {

    addFavorite: (state, action) => {

      const exists = state.find(
        product =>
          product.id === action.payload.id
      );

      if (!exists) {

        state.push(action.payload);

        localStorage.setItem(
          "favorites",
          JSON.stringify(state)
        );

        alert("Added to favorites");

      }

    },


    removeFavorite: (state, action) => {

      const updatedFavorites =
        state.filter(
          product =>
            product.id !== action.payload
        );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;

    }

  }

});


export const {
  addFavorite,
  removeFavorite
} = favoriteSlice.actions;


export default favoriteSlice.reducer;