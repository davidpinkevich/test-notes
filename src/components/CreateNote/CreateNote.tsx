import { Flex } from '@mantine/core';
import { TextInput } from '../TextInput/TextInput';
import { CreateButton } from '../CreateButton/CreateButton';

export const CreateNote = () => {
  return (
    <Flex mt={50} gap="md" justify="center" align="flex-start">
      <TextInput />
      <CreateButton />
    </Flex>
  );
};
