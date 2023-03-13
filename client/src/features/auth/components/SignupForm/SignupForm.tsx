import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { isAxiosError } from 'axios'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useSignup from '../../api/useSignup'

const SignupForm = () => {
    const navigate = useNavigate()

    const { mutate, isLoading, error, isSuccess } = useSignup()

    const errorMessage = isAxiosError(error) ? error.response?.data : ''

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            avatarUrl: '',
            about: '',
            password: '',
        },
        onSubmit: values => {
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
                id="email"
                name="email"
                type="text"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
            />

            <TextField
                id="avatarUrl"
                name="avatarUrl"
                type="text"
                label="Link to the avatar"
                value={formik.values.avatarUrl}
                onChange={formik.handleChange}
            />

            <TextField
                id="about"
                name="about"
                label="About"
                value={formik.values.about}
                onChange={formik.handleChange}
                multiline
                rows={3}
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
                type="submit"
                variant="contained"
                sx={{ width: '100%' }}
                size="large"
                disabled={isLoading}
            >
                Sign Up
            </Button>
        </Box>
    )
}

export default SignupForm
