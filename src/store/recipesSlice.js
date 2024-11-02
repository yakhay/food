// store/recipesSlice.js
import { createSlice } from '@reduxjs/toolkit';
// import e from 'express';
import recipesData from '../data/recipes.json';  // Import the JSON file

const initialState = {
  recipes: recipesData,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    selectRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
  },
});

export const { selectRecipe } = recipesSlice.actions;
export const recipereducer = recipesSlice.reducer;
export default recipesSlice.reducer;
