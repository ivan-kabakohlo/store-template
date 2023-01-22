import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IUser } from '../interfaces/user'

const useUserList = () =>
    useQuery<IUser[], AxiosError>(
        'userList',
        async () => (await (axios.get<IUser[]>('/users'))).data,
    )

export default useUserList
