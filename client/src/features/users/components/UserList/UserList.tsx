import List from '@mui/material/List'

import { IUser } from '../../interfaces/user'
import UserListItem from '../UserListItem/UserListItem'

interface IProps {
    users: IUser[]
}

const UserList = ({ users }: IProps) => {
    return (
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            {users.map(user => (
                <UserListItem
                    key={user.id}
                    {...user}
                />
            ))}
        </List>
    )
}

export default UserList
