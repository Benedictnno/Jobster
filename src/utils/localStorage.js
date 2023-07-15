export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const removeUserfromLocalStorage = () => {
  localStorage.removeItem("user");
};
export const getUserfromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
