import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { isAxiosError } from 'axios'
import { ChangeEvent } from 'react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Error from '../../../../components/Error/Error'
import useSignup from '../../api/useSignup'

const SignupForm = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [about, setAbout] = useState('')
    const [password, setPassword] = useState('')

    const { mutate, isLoading, error } = useSignup({
        onSuccess: () => navigate('/products'),
    })
    const errorMessage = isAxiosError(error) ? error.response?.data : ''

    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const onChangeAvatarUrl = (event: ChangeEvent<HTMLInputElement>) => {
        setAvatarUrl(event.target.value)
    }
    const onChangeAbout = (event: ChangeEvent<HTMLInputElement>) => {
        setAbout(event.target.value)
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        mutate({
            username,
            email,
            avatarUrl,
            about,
            password,
        })
    }

    return (
        <Box
            component="form"
            width={300}
            display="flex"
            flexDirection="column"
            gap={2}
            onSubmit={onSubmit}
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
                value={username}
                onChange={onChangeUsername}
                required
            />

            <TextField
                id="email"
                name="email"
                type="text"
                label="Email"
                value={email}
                onChange={onChangeEmail}
                required
            />

            <TextField
                id="avatarUrl"
                name="avatarUrl"
                type="text"
                label="Link to the avatar"
                value={avatarUrl}
                onChange={onChangeAvatarUrl}
            />

            <TextField
                id="about"
                name="about"
                label="About"
                value={about}
                onChange={onChangeAbout}
                multiline
                rows={3}
            />

            <TextField
                id="password"
                name="username"
                type="password"
                label="Password"
                value={password}
                onChange={onChangePassword}
                required
            />

            <Button
                type="submit"
                variant="contained"
                sx={{ width: '100%' }}
                size="large"
                disabled={isLoading}
            >
                Sign In
            </Button>
        </Box>
    )
}

export default SignupForm
