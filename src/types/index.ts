import { ChangeEvent } from 'react';

export interface INote {
  id: number;
  text: string;
  hash: Array<string>;
}

export interface IInitialState {
  currentText: string;
  currentLabels: Array<string>;
  errorText: boolean;
  notes: Array<INote> | null;
}

export type TCreateText = {
  text: string;
};

export type TStore = {
  notes: IInitialState;
};

export type TViewHashes = {
  text: string;
};

export interface ITextInput {
  text: string;
  errorText: boolean;
  changeText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
