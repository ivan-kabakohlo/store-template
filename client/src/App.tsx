import { QueryClient, QueryClientProvider } from 'react-query'
import { Outlet } from 'react-router-dom'

import BaseLayout from './layouts/baseLayout/baseLayout'

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BaseLayout>
                <Outlet />
            </BaseLayout>
        </QueryClientProvider>
    )
}

export default App
