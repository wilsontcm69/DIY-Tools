import NavBarComponent from './NavBarComponent'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className='h-screen dark:bg-blue-gray-900'>
            <NavBarComponent />
            <div className='px-4 md:px-10 py-6'>
                <Outlet />
            </div>
        </div>
    )
}
