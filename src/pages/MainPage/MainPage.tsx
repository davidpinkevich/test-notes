import { Flex } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { CreateNote } from '../../components/CreateNote/CreateNote';
import { refreshPageNotes } from '../../redux/slice';
import { Items } from '../../components/Items/Items';
import { Filter } from '../../components/Filter/Filter';

export const MainPage = () => {
  const dispatch = useDispatch();
  const ls = localStorage.getItem('notes-test');

  if (ls) dispatch(refreshPageNotes(JSON.parse(ls)));
  if (!ls) localStorage.setItem('notes-test', JSON.stringify([]));
  return (
    <>
      <Header />
      <Flex justify="center" gap="md" align="start">
        <Filter />
        <Flex justify="center" direction="column" align="center">
          <CreateNote />
          <Items />
        </Flex>
      </Flex>
    </>
  );
};
