import { Textarea, Text } from '@mantine/core';
import { findTag } from '../../utils';
import { ViewHashes } from '../ViewHashes/ViewHashes';
import { ITextInput } from '../../types';

export const TextInput = ({ text, errorText, changeText }: ITextInput) => {
  return (
    <div style={{ position: 'relative', width: 500 }}>
      <Text
        p="xs"
        size="20px"
        style={{ whiteSpace: 'pre-wrap', height: '100%', color: 'rgb(51, 47, 47)' }}
      >
        {findTag(text).mirror}
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
        value={text}
        autosize
        size="20px"
        placeholder="Создайте новую заметку"
      />
      <ViewHashes text={text} />
    </div>
  );
};
