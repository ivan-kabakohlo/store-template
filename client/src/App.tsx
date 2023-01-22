import { Outlet } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout/BaseLayout'

const App = () => {
    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    )
}

export default App
