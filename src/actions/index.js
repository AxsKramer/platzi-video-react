
export const setFavoriteAction = (data) => ({
  type: 'SET_FAVORITE',
  payload: data
});

export const deleteFavoriteAction = (id) => ({
  type: 'DELETE_FAVORITE',
  payload: id
});

export const loginAction = (data) => ({
  type: 'LOGIN_REQUEST',
  payload: data
});

export const logoutAction = (data) => ({
  type: 'LOGOUT_REQUEST',
  payload: data
});

export const registerAction = (data) => ({
  type: 'REGISTER_REQUEST',
  payload: data
});

export const getVideoSource = (id) => ({
  type: 'GET_VIDEO_SOURCE',
  payload: id
});

