import React, { createContext, useState, useReducer } from 'react';

// Create a secure UserContext to store and manage user data
export const AuthContext = createContext({});

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return (
                {
                    username: action.payload,
                    email: action.payload
                })
        case 'LOGOUT':
            return (
                {
                    username: null,
                    email: null,
                })
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer,
        {
            username: null,
            email: null
        });

    console.log(state)
    return (
        <AuthContext.Provider
            value={{
                ...state,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    );
};