import { ChangeEvent } from 'react';

export interface INote {
  id: string;
  text: string;
  hash: Array<string>;
}

export interface IInitialState {
  currentText: string;
  currentLabels: Array<string>;
  textItem: string;
  labelItems: Array<string>;
  errorText: boolean;
  notes: Array<INote>;
  filter: Array<string>;
  viewFilterItems: Array<string>;
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
  errorText?: boolean;
  place: string;
  disabled: boolean;
  changeText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IItem {
  id: string;
}

export type TDelete = {
  id: string;
};

export type TRedactor = {
  id: string;
  activeChange: boolean;
  changeActive: (value: boolean) => void;
};
