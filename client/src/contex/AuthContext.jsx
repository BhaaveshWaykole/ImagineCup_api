import React, { createContext, useReducer, useState, useEffect } from 'react';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")),
    error: false,
};
// Create a secure UserContext to store and manage user data
export const AuthContext = createContext({ INITIAL_STATE });

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            };
        case 'LOGOUT':
            return {
                user: null,
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

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