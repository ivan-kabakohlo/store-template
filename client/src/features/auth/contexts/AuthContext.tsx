import { createContext, PropsWithChildren,useContext, useState } from 'react'

import { IUser } from '../../users/interfaces/user'

interface IAuthContext {
    isAuthenticated: boolean
    user: IUser | null
    setIsAuthenticated: (isAuthenticated: boolean) => void
    setUser: (user: IUser | null) => void
}

const initialValue: IAuthContext = {
    isAuthenticated: false,
    user: null,
    setIsAuthenticated: () => void 0,
    setUser: () => void 0,
}

export const AuthContext = createContext<IAuthContext>(initialValue)

export const AuthProvider = (props: PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<IUser | null>(null)

    return(
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                setIsAuthenticated,
                setUser,
            }}
            {...props}
        />
    )
}

const useAuthContext = () => useContext(AuthContext)

export default useAuthContext
