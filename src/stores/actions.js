 
export const login = (condition) => {
  return {
    type:"login",
    payload:condition
  }
};
export const logout = (condition) => {
  return {
    type:"logout",
    payload:condition
  }
};

const actionCreators = {
  login,
  logout,
};

export default actionCreators;