import { AxiosError } from 'axios'
import { useMutation } from 'react-query'

import axios from '../../../config/axios'
import useAuthContext from '../../../contexts/AuthContext'
import { IUser } from '../../users/interfaces/user'

interface ILoginReqBody {
    username: string
    password: string
}
  
interface ILoginResData {
    accessToken: string
    refreshToken: string
    user: IUser
}

const useLogin = ({ onSuccess }: { onSuccess: () => void }) => {
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

            onSuccess()
        },
    })
}

export default useLogin
