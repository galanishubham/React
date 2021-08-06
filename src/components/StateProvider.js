import React, { createContext, useContext, useReducer } from "react";

// * creating data layer using context api so access data at any component
export const StateContext = createContext();

// * Build provider and wrapp entire app
export const StateProvider = ({ reducer, initialState, children }) => (
  // passing entire state object using reducers into value
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* Component */}
    {children}
  </StateContext.Provider>
);
// this is how we can use context api in component using useStateValue
export const useStateValue = () => useContext(StateContext);
