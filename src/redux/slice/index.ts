import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../../types';

const initialState: IInitialState = {
  currentText: '',
  currentLabels: [],
  errorText: false,
  notes: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    saveText: (state, action) => {
      state.currentText = action.payload;
    },
    addCurrentLabel: (state, action) => {
      state.currentLabels.push(action.payload);
    },
    addNote: (state, action) => {
      state.notes
        ? state.notes.push({
            id: action.payload.id,
            text: action.payload.text,
            hash: [],
          })
        : { id: action.payload.id, text: action.payload.text, hash: [], main: false };
    },
  },
});

const { actions, reducer } = notesSlice;

export default reducer;
export const { addNote, saveText, addCurrentLabel } = actions;
