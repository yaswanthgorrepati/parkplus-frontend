import "./App.css";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import ServiceContext from "./utils/ServiceContext.jsx";
import {AuthProvider} from "./utils/AuthContext.jsx";

function App() {
    const [serviceName, setServiceName] = useState("parking");

    return (
        <AuthProvider>
            <ServiceContext.Provider value={{serviceName, setServiceName}}>
                <div className="min-h-dvh bg-neutral-50 text-neutral-900">
                    <Outlet/>
                </div>
            </ServiceContext.Provider>
        </AuthProvider>
    );
}

export default App;
