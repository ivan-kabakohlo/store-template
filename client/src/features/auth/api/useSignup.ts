import { AxiosError } from 'axios'
import { useMutation } from 'react-query'

import axios from '../../../config/axios'
import { IUser } from '../../users/interfaces/user'
import useAuthContext from '../contexts/AuthContext'

interface ISignUpReqBody {
    email: string
    password: string
    username: string
    avatarUrl: string
    about: string
}
  
interface ISignUpResData {
    accessToken: string
    refreshToken: string
    user: IUser
}

const useSignup = () => {
    const { setIsAuthenticated, setUser } = useAuthContext()

    return useMutation<ISignUpResData, AxiosError, ISignUpReqBody>({
        mutationFn: async (userData: ISignUpReqBody) => 
            (await axios.post<ISignUpResData>('/signup', userData)).data,
        onSuccess: (data) => {
            const { accessToken, refreshToken, user } = data

            setIsAuthenticated(true)
            setUser(user)

            localStorage.setItem('ACCESS_TOKEN', accessToken)
            localStorage.setItem('REFRESH_TOKEN', refreshToken)
        },
    })
}

export default useSignup
