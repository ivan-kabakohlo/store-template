import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { useMutation } from 'react-query'

import axios from '../../../config/axios'
import { IUser } from '../../users/interfaces/user'
import useAuthContext from '../contexts/AuthContext'
import logout from './logout'

interface IRefreshResData {
    accessToken: string
    user: IUser
}

const useVerifyAuth = () => {
    const { setIsAuthenticated, setUser } = useAuthContext()

    const { mutate: refresh } = useMutation<IRefreshResData, AxiosError, string>({
        mutationFn: async (refreshToken: string) => 
            (await axios.post<IRefreshResData>('/refresh', { refreshToken })).data,
        onSuccess: (data: IRefreshResData) => {
            const { accessToken: newAccessToken, user } = data

            localStorage.setItem('ACCESS_TOKEN', newAccessToken)

            setIsAuthenticated(true)
            setUser(user)
        },
        onError: () => {
            logout()
        },
    })

    useEffect(() => {
        const refreshToken = localStorage.getItem('REFRESH_TOKEN')

        if (refreshToken) {
            refresh(refreshToken)   
        }
    }, [refresh])
}

export default useVerifyAuth
