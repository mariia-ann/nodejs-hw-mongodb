const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseBoolean = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;

  if (value.toLowerCase() === 'true') return true;
  if (value.toLowerCase() === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedBoolean = parseBoolean(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedBoolean,
  };
};
