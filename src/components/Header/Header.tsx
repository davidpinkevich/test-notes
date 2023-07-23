import { Title, Group, Image, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import logo from '../../assets/icons/logo.svg';
import { TStore } from '../../types';

const Header = () => {
  const { notes } = useSelector((state: TStore) => state.notes);
  return (
    <header style={{ backgroundColor: 'rgb(241, 252, 250)' }}>
      <Group position="apart" pl="5%" pr="5%" pt={15} pb={15}>
        <Group spacing={3}>
          <Image maw={45} src={logo} />
          <Title order={1}>Notes</Title>
        </Group>
        <Text fz="xl">Всего заметок: {notes.length}</Text>
      </Group>
    </header>
  );
};

export { Header };
