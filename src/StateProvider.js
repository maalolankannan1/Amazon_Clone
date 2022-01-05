import React, { useContext, createContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wraps the whole app within a context
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull out information from context
export const useStateValue = () => useContext(StateContext);