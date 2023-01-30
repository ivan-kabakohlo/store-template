import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import axios from '../../../config/axios'
import { IUser } from '../interfaces/user'

const USER_LIST_QUERY_KEY = 'USER_LIST'

const useUserList = () =>
    useQuery<IUser[], AxiosError>(
        USER_LIST_QUERY_KEY,
        async () => (await (axios.get<IUser[]>('/users'))).data,
    )

export default useUserList
