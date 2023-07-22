interface INote {
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
