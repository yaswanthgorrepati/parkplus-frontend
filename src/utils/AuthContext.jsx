import {createContext, useContext, useState, useEffect} from "react";
import {GET_TOKEN, PROFILE_URL} from "./constants.jsx";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            getProfile();
        }
    }, [token]);


    const getProfile = () => {
        fetch(PROFILE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GET_TOKEN()}`,
            },
        }).then(res => {
            console.log(res);
            if (!res.ok) {
                throw new Error("Failed to fetch user details");
            }
            return res.json();
        }).then(data => {
            console.log("user details", data);
            setUser({
                firstName: (data?.profile?.firstName) ? data?.user.username : data?.profile?.firstName,
                lastName: data?.profile?.lastName,
                email: data?.user.email,
                avatarUrl: data?.profile?.avatarUrl,
            });
            console.log("address", data?.addresses?.[0]);
        }).catch(error => {
            console.error(error);
        })
    }

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
        <AuthContext.Provider value={{token, user, setUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
