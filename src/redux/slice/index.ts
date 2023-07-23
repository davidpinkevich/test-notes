import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../../types';

const initialState: IInitialState = {
  currentText: '',
  textItem: '',
  labelItems: [],
  currentLabels: [],
  errorText: false,
  notes: [],
  filter: [],
  viewFilterItems: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    saveText: (state, action) => {
      state.currentText = action.payload;
    },
    addFilter: (state, action) => {
      state.filter = [...action.payload];
    },
    startFilter: (state, action) => {
      state.viewFilterItems = action.payload;
    },
    viewTextItem: (state, action) => {
      state.textItem = action.payload;
    },
    addLabelsItem: (state, action) => {
      state.labelItems = [...action.payload];
    },
    changeError: (state, action) => {
      state.errorText = action.payload;
    },
    addCurrentLabel: (state, action) => {
      state.currentLabels = [...action.payload];
    },
    refreshPageNotes: (state, action) => {
      state.notes = action.payload;
    },
    changeNote: (state, action) => {
      const item = state.notes.filter((item) => item.id === action.payload.id)[0];
      item.text = action.payload.text;
      item.hash = action.payload.hash;
    },
    addNote: (state, action) => {
      state.notes
        ? state.notes.push({
            id: action.payload.id,
            text: action.payload.text,
            hash: action.payload.hash,
          })
        : (state.notes = [
            {
              id: action.payload.id,
              text: action.payload.text,
              hash: action.payload.hash,
            },
          ]);
    },
  },
});

const { actions, reducer } = notesSlice;

export default reducer;
export const {
  addNote,
  refreshPageNotes,
  saveText,
  addCurrentLabel,
  changeError,
  viewTextItem,
  addLabelsItem,
  changeNote,
  addFilter,
  startFilter,
} = actions;
