import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  category: string;
};

interface FavoriteState {
  items: Item[];
}

const initialState: FavoriteState = {
  items: [],
};

const addFavoriteMovie = (
  state: FavoriteState,
  action: PayloadAction<Item>
) => {
  const existingitem = state.items.find(
    (item) => item.id === action.payload.id
  );
  if (!existingitem) {
    state.items.push(action.payload);
  }
};

const removeFavoriteMovie = (
  state: FavoriteState,
  action: PayloadAction<number>
) => {
  const newFavoriteItemList = state.items.filter(
    (item) => item.id !== action.payload
  );
  state.items = newFavoriteItemList;
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteMovie,
    removeFavoriteMovie,
  },
});

export const {
  addFavoriteMovie: addFavorite,
  removeFavoriteMovie: removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
