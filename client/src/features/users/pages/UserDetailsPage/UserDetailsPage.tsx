import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { isAxiosError } from 'axios'
import { useParams } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useUserDetails from '../../api/useUserDetails'
import UserCard from '../../components/UserCard/UserCard'

const UserDetailsPage = () => {
    const { id } = useParams()
    const { isLoading, data, error } = useUserDetails(id)

    if (isLoading) {
        return (
            <Grid container justifyContent="center">
                <Grid item pt={30}>
                    <CircularProgress />
                </Grid>
            </Grid>
        )
    }
    if (error) {
        const errorMessage = isAxiosError(error) ? error.response?.data : ''
        return <Error error={errorMessage} />
    }
    if (!data) {
        return (
            <Typography variant="body1" component="p">
                User details is not available.
            </Typography>
        )
    }

    return (
        <Grid container>
            <Grid item xl={12}>
                <UserCard {...data} />
            </Grid>
        </Grid>
    )
}

export default UserDetailsPage
