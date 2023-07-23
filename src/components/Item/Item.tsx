import { Flex, Paper } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { RedactorButton } from '../RedactorButton/RedactorButton';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { viewTextItem, addLabelsItem, changeNote } from '../../redux/slice';
import { createTags } from '../../utils';
import { TStore, IItem } from '../../types';

export const Item = ({ id }: IItem) => {
  const [activeChange, setActiveChange] = useState<boolean>(false);
  const { notes } = useSelector((state: TStore) => state.notes);

  const currentItem = notes.filter((item) => item.id === id);
  const dispatch = useDispatch();

  const changeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(viewTextItem(event.target.value));
    dispatch(addLabelsItem(createTags(event.target.value, activeChange)));
    dispatch(
      changeNote({
        id,
        text: event.target.value,
        hash: createTags(event.target.value, activeChange),
      })
    );
  };

  const changeActive = (value: boolean) => {
    setActiveChange(value);
  };

  return (
    <Paper shadow="md" radius="lg" pt={50} pr={70} pb={50} pl={50}>
      <Flex pos="relative" gap="md" justify="center" align="flex-start">
        <TextInput
          disabled={!activeChange}
          place="Редактирование заметки"
          text={currentItem[0].text}
          changeText={changeText}
        />
        <RedactorButton id={id} activeChange={activeChange} changeActive={changeActive} />
        <DeleteButton id={id} />
      </Flex>
    </Paper>
  );
};
