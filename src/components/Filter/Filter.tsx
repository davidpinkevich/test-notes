import { Stack, Text, Paper } from '@mantine/core';
import { FilterHash } from './FilterFHash/FilterHash';
import { FilterFind } from './FilterFind/FilterFind';

export const Filter = () => {
  return (
    <Paper w={300} shadow="xl" radius="md" pt={10} pr={50} pb={20} pl={50} mt={50}>
      <Stack>
        <Text color="rgb(51, 47, 47)" ta="center" fz="xl">
          Сортировка по тегам:
        </Text>
        <FilterHash />
        <FilterFind />
      </Stack>
    </Paper>
  );
};
