import { AxiosError } from 'axios'
import { useMutation } from 'react-query'

import axios from '../../../config/axios'
import { IUser } from '../../users/interfaces/user'
import useAuthContext from '../contexts/AuthContext'

interface ILoginReqBody {
    username: string
    password: string
}
  
interface ILoginResData {
    accessToken: string
    refreshToken: string
    user: IUser
}

const useLogin = () => {
    const { setIsAuthenticated, setUser } = useAuthContext()

    return useMutation<ILoginResData, AxiosError, ILoginReqBody>({
        mutationFn: async (userData: ILoginReqBody) => 
            (await axios.post<ILoginResData>('/login', userData)).data,
        onSuccess: (data) => {
            const { accessToken, refreshToken, user } = data

            setIsAuthenticated(true)
            setUser(user)

            localStorage.setItem('ACCESS_TOKEN', accessToken)
            localStorage.setItem('REFRESH_TOKEN', refreshToken)
        },
    })
}

export default useLogin
