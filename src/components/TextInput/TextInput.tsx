import { Textarea, Text } from '@mantine/core';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveText, changeError, addCurrentLabel } from '../../redux/slice';
import { TStore } from '../../types';
import { findTag, createTags } from '../../utils';
import { ViewHashes } from '../ViewHashes/ViewHashes';

export const TextInput = () => {
  const { currentText, errorText } = useSelector((state: TStore) => state.notes);
  const dispatch = useDispatch();

  const changeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(saveText(event.target.value));
    dispatch(changeError(false));
    dispatch(addCurrentLabel(createTags(event.target.value)));
  };

  return (
    <div style={{ position: 'relative', width: 500 }}>
      <Text
        p="xs"
        size="20px"
        style={{ whiteSpace: 'pre-wrap', height: '100%', color: 'rgb(51, 47, 47)' }}
      >
        {findTag(currentText).mirror}
      </Text>
      <Textarea
        error={errorText ? 'Введите хотя бы 1 символ' : false}
        radius="md"
        color="transparent"
        top={0}
        right={0}
        pos="absolute"
        w="100%"
        styles={{
          input: { color: 'transparent', caretColor: 'black', backgroundColor: 'inherit' },
        }}
        onChange={changeText}
        value={currentText}
        autosize
        size="20px"
        placeholder="Создайте новую заметку"
      />
      <ViewHashes />
    </div>
  );
};
