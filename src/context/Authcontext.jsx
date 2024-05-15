import { useEffect, useReducer, createContext } from "react";


const initialState = {
    user: null,

};

const rootReducer = (state, action) => {
    switch (action. type) {
        case "LOGIN":
            return {...state, user: action.payload}
            case "LOGOUT":
                return {...state, user: null};
                default:
                    return state;
    }

};


const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);


    useEffect(() => {
        dispatch({
            type: "LOGIN",
            payload: JSON.stringify(window.localStorage.getItem("user"))
        })

    }, [])

    return(
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
};

export {AuthContext, AuthProvider};