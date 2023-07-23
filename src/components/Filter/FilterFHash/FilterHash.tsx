import { Button, Group, Text, Tooltip } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../../redux/slice';
import { TStore } from '../../../types';

export const FilterHash = () => {
  const { filter } = useSelector((state: TStore) => state.notes);
  const dispatch = useDispatch();
  const deleteHash = (hash: string) => {
    dispatch(
      addFilter(
        filter.filter((item) => {
          return item !== hash;
        })
      )
    );
  };
  return (
    <Group spacing="5px">
      {!filter.length && (
        <Text ta="center" color="rgb(51, 47, 47)">
          Вы можете добавить теги для сортировки
        </Text>
      )}
      {filter.map((item) => (
        <Tooltip
          key={uuidv4()}
          label="Нажмите для удаления"
          color="gray"
          position="left"
          offset={5}
          withArrow
        >
          <Button
            onClick={() => deleteHash(item)}
            pos="relative"
            color="teal"
            compact
            size="md"
            w="100%"
          >
            {item}
          </Button>
        </Tooltip>
      ))}
    </Group>
  );
};
