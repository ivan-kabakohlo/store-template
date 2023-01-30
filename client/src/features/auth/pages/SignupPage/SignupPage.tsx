import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

import SignupForm from '../../components/SignupForm/SignupForm'

const LoginPage = () => {
    return (
        <Box
            pt={10}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <SignupForm />

            <Typography variant='body2' component="p" mt={2}>
                Already have an account?{' '}
                <Link
                    variant="body2"
                    component={RouterLink}
                    to="/login"
                >
                    Log in
                </Link>
            </Typography>
        </Box>
    )
}

export default LoginPage
