import React, { createContext, useReducer } from "react";
export const AppContext = createContext();

const initialState = {
  userInfo: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERINFO":
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      throw new Error();
  }
};

export const Context = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
