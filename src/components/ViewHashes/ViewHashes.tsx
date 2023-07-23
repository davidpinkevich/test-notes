import { Button } from '@mantine/core';
import { TViewHashes } from '../../types';
import { createTags } from '../../utils';
import './ViewHashes.scss';

export const ViewHashes = ({ text }: TViewHashes) => {
  const hashes = createTags(text);

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
