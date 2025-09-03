import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     if (token) {
    //         // fetch user details using token
    //         fetch("/api/v1/users/me", {
    //             headers: { Authorization: `Bearer ${token}` }
    //         })
    //             .then((res) => res.json())
    //             .then(setUser)
    //             .catch(() => logout());
    //     }
    // }, [token]);

    function login(newToken) {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    }

    function logout() {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
