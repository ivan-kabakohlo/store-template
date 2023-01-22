import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

interface IProps {
    id: string
    username: string
    avatarUrl: string
    about: string
}

const UserListItem = ({ id, username, avatarUrl, about }: IProps) => {
    return (
        <>
            <ListItemButton
                key={id}
                alignItems="flex-start"
                component={Link}
                to={`/users/${id}`}
            >
                <ListItemAvatar>
                    <Avatar alt={username} src={avatarUrl} />
                </ListItemAvatar>

                <ListItemText
                    primary={username}
                    secondary={
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {about}
                        </Typography>
                    }
                />
            </ListItemButton>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default UserListItem
