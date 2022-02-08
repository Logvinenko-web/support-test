import JWTDecode from 'jwt-decode';

export const loggedIn = () => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    const { userId } = JWTDecode(token);
    return !!userId;
  }
  return false;
};

export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const saveTokenSession = (token) => {
  sessionStorage.setItem('token', token);
};
