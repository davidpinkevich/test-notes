import { Button } from '@mantine/core';
import { useSelector } from 'react-redux';
import { TStore, TRedactor } from '../../types';

export const RedactorButton = ({ id, activeChange, changeActive }: TRedactor) => {
  const { notes, textItem, labelItems } = useSelector((state: TStore) => state.notes);

  const saveItem = (active: boolean) => {
    const newItems = notes.map((item) => {
      if (item.id === id) return { id, text: textItem, hash: labelItems };
      return item;
    });
    if (active) localStorage.setItem('notes-test', JSON.stringify(newItems));
  };

  return (
    <Button
      onClick={() => {
        changeActive(!activeChange);
        saveItem(activeChange);
      }}
      radius="md"
      size="20px"
      p="md"
      w={160}
      color={activeChange ? 'teal' : 'blue'}
    >
      {activeChange ? 'Сохранить' : 'Изменить'}
    </Button>
  );
};
