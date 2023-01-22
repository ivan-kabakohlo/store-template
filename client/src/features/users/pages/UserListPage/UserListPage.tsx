import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { isAxiosError } from 'axios'

import Error from '../../../../components/Error/Error'
import useUserList from '../../api/useUserList'
import UserList from '../../components/UserList/UserList'

const UserListPage = () => {
    const { isLoading, error, data } = useUserList()

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
                Users are not available.
            </Typography>
        )
    }

    return (
        <Container maxWidth={false}>
            <UserList users={data} />
        </Container>
    )
}

export default UserListPage
