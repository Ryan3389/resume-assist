import { createContext, useState, useContext, useEffect } from "react";


const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await fetch("/api/user/auth")
                const data = await response.json()

                if (data.isLoggedIn) {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false)
                }
            } catch (error) {
                setIsLoggedIn(false)
            }
        }
        checkAuth()
    }, [])


    const logout = async () => {
        try {
            const response = await fetch("/api/user/logout")

            const data = await response.json()
            console.log(data)
            if (data.isLoggedIn === false) {
                setIsLoggedIn(false)
                window.location.assign("/")
            }

        } catch (error) {
            console.error('error logging out', error)
        }
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}