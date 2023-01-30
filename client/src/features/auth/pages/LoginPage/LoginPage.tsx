import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
    return (
        <Box
            pt={10}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <LoginForm />

            <Typography variant='body2' component="p" mt={2}>
                Don&apos;t have an account?{' '}
                <Link
                    variant="body2"
                    component={RouterLink}
                    to="/signup"
                >
                    Sign up
                </Link>
            </Typography>
        </Box>
    )
}

export default LoginPage
