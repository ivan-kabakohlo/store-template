import { Outlet } from 'react-router-dom'

import BaseLayout from './layouts/baseLayout/baseLayout'

const App = () => {
    return (
        <div className="App">
            <BaseLayout>
                <Outlet />
            </BaseLayout>
        </div>
    )
}

export default App
