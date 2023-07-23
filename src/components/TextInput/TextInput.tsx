import { Textarea, Text } from '@mantine/core';
import { findTag } from '../../utils';
import { ViewHashes } from '../ViewHashes/ViewHashes';
import { ITextInput } from '../../types';

export const TextInput = ({ text, errorText, place, changeText, disabled }: ITextInput) => {
  return (
    <div style={{ position: 'relative', width: 500 }}>
      <Text
        p="xs"
        size="20px"
        style={{
          whiteSpace: 'pre-wrap',
          height: '100%',
          color: disabled ? 'rgba(51, 47, 47,0)' : 'rgb(51, 47, 47)',
        }}
      >
        {findTag(text, disabled).mirror}
      </Text>
      <Textarea
        disabled={disabled}
        error={errorText ? 'Введите хотя бы 1 символ' : false}
        radius="md"
        color="transparent"
        top={-1}
        right={-1}
        pos="absolute"
        w="100%"
        styles={{
          input: {
            color: 'transparent',
            caretColor: 'black',
            backgroundColor: 'inherit',
          },
        }}
        onChange={changeText}
        value={text}
        autosize
        size="20px"
        placeholder={place}
      />
      <ViewHashes text={text} />
    </div>
  );
};
