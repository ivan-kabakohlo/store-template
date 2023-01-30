import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import formatDate from '../../../../utils/formatDate'
import { IUser } from '../../../users/interfaces/user'

interface IProps {
    text: string
    createdAt: string
    user: IUser
}

const Review = ({
    text,
    createdAt,
    user: {
        username,
        avatarUrl,
    },
}: IProps) => {
    return (
        <Box p={1} sx={{ maxWidth: 600 }}>
            <Grid container spacing={2} wrap="nowrap">
                <Grid item>
                    <Avatar alt={username} src={avatarUrl} sx={{ width: 30, height: 30 }} />
                </Grid>

                <Grid item>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography
                            component="h1"
                            variant="body1"
                            color="text.primary"
                        >
                            {username}
                        </Typography>

                        <Typography
                            component="h1"
                            variant="body2"
                            color="text.secondary"
                        >
                            {formatDate(createdAt)}
                        </Typography>
                    </Box>

                    <Typography
                        component="p"
                        variant="body2"
                        color="text.primary"
                    >
                        {text}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    ) 
}

export default Review
