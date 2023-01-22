import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IUser } from '../interfaces/user'

const useUserDetails = (id?: string) =>
    useQuery<IUser, AxiosError>({
        queryKey: ['userDetails', id],
        queryFn: async () => (await axios.get<IUser>(`/users/${id}`)).data,
        enabled: !!id,
    })

export default useUserDetails
