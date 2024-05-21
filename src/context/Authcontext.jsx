import { useEffect, useReducer, createContext } from "react";

const initialState = {
  user: null,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "REGISTER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (user) {
      dispatch({
        type: "LOGIN",
        payload: JSON.parse(user),
      });
    }
    dispatch({
      type: "REGISTER",
      payload: JSON.stringify(window.localStorage.getItem("user")),
    });
  }, []);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
Collapse;
