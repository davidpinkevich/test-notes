import { Button } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { changeError, addNote, saveText, addCurrentLabel } from '../../redux/slice';
import { TStore } from '../../types';

export const CreateButton = () => {
  const { currentText, currentLabels } = useSelector((state: TStore) => state.notes);

  const dispatch = useDispatch();
  const add = () => {
    if (currentText.length === 0) {
      dispatch(changeError(true));
    } else {
      dispatch(changeError(false));
      dispatch(addNote({ id: uuidv4(), text: currentText, hash: currentLabels }));
      dispatch(saveText(''));
      dispatch(addCurrentLabel([]));
    }
  };
  return (
    <Button onClick={add} radius="md" size="20px" p="md">
      Создать Note
    </Button>
  );
};
