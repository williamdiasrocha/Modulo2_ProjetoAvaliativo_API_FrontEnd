import { useEffect, useState, useContext } from "react"
import { createContext } from "react"

const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export function AppContextProvider({ children }) {
    const [paginaAtual, setPaginaAtual] = useState("/home")
    return (
        <AppContext.Provider value={{ paginaAtual, setPaginaAtual }}>
        {children}
        </AppContext.Provider>
    )
}

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    const login = (userData) => {
        setIsLoggedIn(true)
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logout = () => {
        setIsLoggedIn(false)
        setUser(null)
        localStorage.removeItem('user')
    }

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
            setIsLoggedIn(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}