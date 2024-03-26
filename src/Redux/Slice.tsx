// slice.tsx
import { createSlice } from "@reduxjs/toolkit";

interface Card {
  id: string;
  name: string;
}

interface InitialStateType {
  data: Card[];
  endIndex: number;
}

const initialState: InitialStateType = {
  data: [], 
  endIndex: 5,
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
   
    addOneCard: (state) => {
      state.endIndex = state.endIndex + 1;
    },

    deleteCard: (state, action) => {
      const { name } = action.payload;
      state.endIndex = state.endIndex - 1;
      state.data = state.data.filter(card => card.name !== name);
  }
  
  }
});

export const { addData, addOneCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;
