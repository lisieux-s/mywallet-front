import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const persistAuth = JSON.parse(localStorage.getItem('auth'));
    const [auth, setAuth] = useState(persistAuth);

    function signIn(authData) {
        setAuth(authData);
        localStorage.setItem('auth', JSON.stringify(authData));
    }

    return (
        <AuthContext.Provider value={{ auth, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;