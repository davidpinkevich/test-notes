import { Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { startFilter } from '../../../redux/slice';
import { TStore } from '../../../types';

export const FilterFind = () => {
  const { filter } = useSelector((state: TStore) => state.notes);
  const dispatch = useDispatch();
  const start = () => {
    dispatch(startFilter(filter));
  };
  return (
    <Button onClick={start} size="lg">
      Поиск
    </Button>
  );
};
