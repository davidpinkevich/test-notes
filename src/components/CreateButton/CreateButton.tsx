import { Button } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { changeError, addNote, saveText, addCurrentLabel } from '../../redux/slice';
import { TStore, INote } from '../../types';

export const CreateButton = () => {
  const { currentText, currentLabels } = useSelector((state: TStore) => state.notes);

  const dispatch = useDispatch();
  const add = () => {
    if (currentText.length === 0) {
      dispatch(changeError(true));
    } else {
      const item = { id: uuidv4(), text: currentText, hash: currentLabels };
      dispatch(changeError(false));
      dispatch(addNote(item));
      const arr: Array<INote> = JSON.parse(localStorage.getItem('notes-test') || '');
      localStorage.setItem('notes-test', JSON.stringify([...arr, item]));

      dispatch(saveText(''));
      dispatch(addCurrentLabel([]));
    }
  };
  return (
    <Button onClick={add} radius="md" size="20px" p="md" w={160}>
      Добавить
    </Button>
  );
};
