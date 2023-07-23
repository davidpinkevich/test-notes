import { Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { TViewHashes, TStore } from '../../types';
import { createTags } from '../../utils';
import { addFilter } from '../../redux/slice';
import './ViewHashes.scss';

export const ViewHashes = ({ text }: TViewHashes) => {
  const { filter } = useSelector((state: TStore) => state.notes);
  const dispatch = useDispatch();
  const hashes = createTags(text, false);

  const add = (item: string) => {
    const newArr = [...filter];
    newArr.push(item);
    const set = new Set(newArr);
    dispatch(addFilter(Array.from(set)));
  };

  return (
    <>
      {!!hashes.length && (
        <div className="main__hashes">
          {hashes.map((item, index) => {
            return (
              <Button onClick={() => add(item || '')} compact size="md" color="cyan" key={index}>
                {item}
              </Button>
            );
          })}
        </div>
      )}
    </>
  );
};
