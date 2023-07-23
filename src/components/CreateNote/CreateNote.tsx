import { Flex, Paper } from '@mantine/core';
import { TextInput } from '../TextInput/TextInput';
import { CreateButton } from '../CreateButton/CreateButton';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveText, changeError, addCurrentLabel } from '../../redux/slice';
import { TStore } from '../../types';
import { createTags } from '../../utils';

export const CreateNote = () => {
  const { currentText, errorText } = useSelector((state: TStore) => state.notes);
  const dispatch = useDispatch();

  const changeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(saveText(event.target.value));
    dispatch(changeError(false));
    dispatch(addCurrentLabel(createTags(event.target.value, true)));
  };

  return (
    <Paper shadow="xl" radius="md" pt={50} pr={70} pb={50} pl={45} mt={50}>
      <Flex gap="md" justify="center" align="flex-start">
        <TextInput
          disabled={false}
          place="Создание новой заметки"
          text={currentText}
          errorText={errorText}
          changeText={changeText}
        />
        <CreateButton />
      </Flex>
    </Paper>
  );
};
