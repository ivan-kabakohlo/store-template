import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface IProps {
    username: string
    avatarUrl: string
    about: string
}

const UserCard = ({ username, avatarUrl, about }: IProps) => {
    return (
        <Box p={2} sx={{ maxWidth: 500 }}>
            <Grid container spacing={2} wrap="nowrap">
                <Grid item>
                    <Avatar alt={username} src={avatarUrl} sx={{ width: 75, height: 75 }} />
                </Grid>

                <Grid item>
                    <Typography
                        component="h1"
                        variant="h5"
                        color="text.primary"
                    >
                        {username}
                    </Typography>

                    <Typography
                        component="p"
                        variant="body2"
                        color="text.primary"
                    >
                        {about}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserCard
