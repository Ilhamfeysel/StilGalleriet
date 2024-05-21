import { useEffect, useReducer, createContext } from "react";


const initialState = {
    user: null,

};

const rootReducer = (state, action) => {
    switch (action. type) {
        case "LOGIN":
            return {...state, user: action.payload};
            case "LOGOUT":
                return {...state, user: null};
                default:
                    return state;
    }

};


const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);


    useEffect(() => { //har uppdaterat detta 
        const user = window.localStorage.getItem("user");
        if (user) {
            dispatch({
                type: "LOGIN",
                payload: JSON.parse(user)
            });
        }
    }, []) //uppdaterat hit

    const logout = () => {
        dispatch({ type: "LOGOUT"});
        window.localStorage.removeItem("user");
    };

    return(
        <AuthContext.Provider value={{state, dispatch, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export {AuthContext, AuthProvider};