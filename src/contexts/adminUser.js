import { createContext, useEffect, useState } from "react";
// stock la création de context dans cette variable
const UserContext = createContext({})

// function pour le contexte 
const UserContextProvider = ({children}) => {
    // state qui va stocker l'utilisateur connecter (admin)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [])
        // function qui fetch sur la route pour récupérer l'utilisateur connecter 
    const getUser = async() => {
        const response = await fetch (`http://localhost:5000/auth/me`, {
            credentials: "include",
        })
        if (response.status >= 400) {
            throw response.stautusText
        }
        const user = await response.json()
        console.log("DonRico", user);
    
        setUser(user)
    }

    // on déclare les value que nous allon exporter donc la valeur du state
    const value = {
        user,
        setUser
    }
    console.log("log de mon user",user);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserContextProvider
}