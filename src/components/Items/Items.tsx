import { Stack, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { TStore, INote } from '../../types';
import { Item } from '../Item/Item';

export const Items = () => {
  const { notes, viewFilterItems } = useSelector((state: TStore) => state.notes);

  let arr: Array<INote> = [];
  if (viewFilterItems.length) {
    arr = notes.filter((item) => {
      return viewFilterItems.every((x) => item.hash.includes(x));
    });
  } else {
    arr = notes;
  }

  return (
    <Stack mt={30} spacing={20} pb={40}>
      <Text fz="28px" color="rgb(51, 47, 47)">
        {arr.length ? 'Список заметок:' : 'Заметки отсутствуют'}
      </Text>
      {arr.map((item) => {
        return <Item key={item.id} id={item.id} />;
      })}
    </Stack>
  );
};
