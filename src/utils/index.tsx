import { v4 as uuidv4 } from 'uuid';

export const findTag = (text: string, disabled: boolean) => {
  const textArray = text.split('').reduce((accum: Array<string>, item: string) => {
    if (!accum.length) {
      accum.push(item);
    } else if (/\s/.test(item) && accum.length && /\s/.test(accum[accum.length - 1])) {
      accum[accum.length - 1] += item;
    } else if (/\s/.test(item) && accum.length && /\S/.test(accum[accum.length - 1])) {
      accum.push(item);
    } else if (/\S/.test(item) && accum.length && /\s/.test(accum[accum.length - 1])) {
      accum.push(item);
    } else if (/\S/.test(item) && accum.length && /\S/.test(accum[accum.length - 1])) {
      accum[accum.length - 1] += item;
    }
    return accum;
  }, []);

  const arrayWithHash = textArray
    .map((item) => {
      if (item.includes('#') && !item.endsWith('#')) {
        const regex = /^(.*)(#.+)$/;
        if (regex.test(item)) return item.match(regex)?.slice(1);
      }
      return item;
    })
    .flat();

  const mirror = arrayWithHash.map((item) => {
    if (item !== undefined && /\#\S+/.test(item))
      return (
        <span key={uuidv4()} style={{ color: disabled ? 'rgba(28,126,214,0)' : 'rgb(28,126,214)' }}>
          {item}
        </span>
      );
    return item;
  });

  const hashes = arrayWithHash.filter((item) => {
    if (item !== undefined && /\#\S+/.test(item)) return item;
  });

  return { hashes, mirror };
};

export const createTags = (text: string, disabled: boolean) => {
  const arr = findTag(text, disabled).hashes;
  const set = new Set(arr);
  return Array.from(set);
};
