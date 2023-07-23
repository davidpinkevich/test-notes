import { Button } from '@mantine/core';
import { useSelector } from 'react-redux';
import { TStore } from '../../types';
import { createTags } from '../../utils';
import './ViewHashes.scss';

export const ViewHashes = () => {
  const { currentText } = useSelector((state: TStore) => state.notes);

  const hashes = createTags(currentText);
  return (
    <>
      {!!hashes.length && (
        <div className="main__hashes">
          {hashes.map((item, index) => {
            return (
              <Button h={32} color="cyan" radius="md" size="xl" key={index}>
                {item}
              </Button>
            );
          })}
        </div>
      )}
    </>
  );
};
