import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { isAxiosError } from 'axios'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useLogin from '../../api/useLogin'

const LoginForm = () => {
    const navigate = useNavigate()

    const { mutate, isLoading, error, isSuccess } = useLogin()

    const errorMessage = isAxiosError(error) ? error.response?.data : ''

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            mutate(values)
        },
    })

    useEffect(() => {
        if (isSuccess) {
            navigate('/products')
        }
    }, [isSuccess, navigate])

    return (
        <Box
            component="form"
            width={300}
            display="flex"
            flexDirection="column"
            gap={2}
            onSubmit={formik.handleSubmit}
        >
            {error && (
                <Box width="100%" mb={2}>
                    <Error error={errorMessage} />
                </Box>
            )}

            <TextField
                id="username"
                name="username"
                type="text"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                required
            />

            <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
            />

            <Button
                variant="contained"
                sx={{ width: '100%' }}
                size="large"
                type="submit"
                disabled={isLoading}
            >
                Sign In
            </Button>
        </Box>
    )
}

export default LoginForm
