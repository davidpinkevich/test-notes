import { CloseButton, Tooltip } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { refreshPageNotes } from '../../redux/slice';
import { TStore, TDelete } from '../../types';

export const DeleteButton = ({ id }: TDelete) => {
  const { notes } = useSelector((state: TStore) => state.notes);
  const dispatch = useDispatch();

  const deleteItem = () => {
    const newItems = notes.filter((item) => item.id !== id);
    dispatch(refreshPageNotes(newItems));
    localStorage.setItem('notes-test', JSON.stringify(newItems));
  };

  return (
    <Tooltip label="Удалить заметку" color="gray" position="top" offset={5} withArrow>
      <CloseButton
        onClick={deleteItem}
        pos="absolute"
        top={0}
        right={-65}
        size={55}
        iconSize={30}
      />
    </Tooltip>
  );
};
