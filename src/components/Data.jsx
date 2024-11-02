// store/recipesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import recipesData from './../Products.json';  // Import the JSON file

const initialState = {
  recipes: recipesData,  // Use the JSON data as the initial state
  selectedRecipeId: null,
};

const Data = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    selectRecipe: (state, action) => {
      state.selectedRecipeId = action.payload;
    },
  },
});

export const { selectRecipe } = Data.actions;
export default Data.reducer;
