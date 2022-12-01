export const isSeller = (authUser) => {
  return authUser && authUser.role === "SELLER";
};
