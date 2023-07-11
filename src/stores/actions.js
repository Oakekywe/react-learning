
export const login = (condition) => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: condition,
    });
  };
};
export const logout = (condition) => {
  return (dispatch) => {
    dispatch({
      type: "logout",
      payload: condition,
    });
  };
};

const actionCreators = {
  login,
  logout,
};

export default actionCreators;