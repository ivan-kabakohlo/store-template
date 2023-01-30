import { Outlet } from 'react-router-dom'

import useVerifyAuth from './features/auth/api/useVerifyAuth'
import BaseLayout from './layouts/BaseLayout/BaseLayout'

const App = () => {
    useVerifyAuth()

    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    )
}

export default App
