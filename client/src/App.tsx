import { Outlet } from 'react-router-dom'

import BaseLayout from './layouts/baseLayout/baseLayout'

const App = () => {
    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    )
}

export default App
