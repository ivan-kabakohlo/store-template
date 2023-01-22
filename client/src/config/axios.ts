import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
})

const routesWithAuth = ['/products', '/comments', '/users']

instance.interceptors.request.use(
    (config) => {
        if (routesWithAuth.some((route) => config?.url?.includes(route))) {
            const accessToken = localStorage.getItem('ACCESS_TOKEN')
            config.headers.authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error),
)

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (
            error.response.status === 401 &&
            !originalRequest.isRetry &&
            routesWithAuth.some((route) => originalRequest.url.includes(route))
        ) {
            try {
                const refreshToken = localStorage.getItem('REFRESH_TOKEN')
                if (!refreshToken) {
                    return // TODO: logout
                }

                const response = await instance.post('/refresh', { refreshToken })
                const { accessToken } = response.data
                localStorage.setItem('ACCESS_TOKEN', accessToken)

                originalRequest.isRetry = true
                originalRequest.headers.authorization = `Bearer ${accessToken}`
                return instance(originalRequest)
            } catch (err) {
                return // TODO: logout
            }
        }

        return Promise.reject(error)
    },
)

export default instance
