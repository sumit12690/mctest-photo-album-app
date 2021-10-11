export const userFilter = (arr, user) => {
  if (!user) return arr;

  return arr.filter((album) => user.includes(album.owner));
};
