export const loginAsync = (username, password) =>
  dispatch => setTimeout(() => ({ username, password }), 3000);
