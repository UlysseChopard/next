export const login = ({ email, password }) => {
  return fetch("http://localhost:4000/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};
export const logout = () => fetch("http://localhost:4000/api/logout");
export const signup = ({ firstName, lastName, email, password }) =>
  fetch("http://localhost:4000/api/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  });
export const getUser = () =>
  fetch("http://localhost:4000/api/users").then((res) => res.json());