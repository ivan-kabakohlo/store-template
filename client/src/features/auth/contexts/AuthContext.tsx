/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from 'react'

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
    setIsAuthenticated: () => {},
    setUser: () => {},
}

export const AuthContext = createContext<IAuthContext>(initialValue)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const AuthProvider = (props) => {
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
