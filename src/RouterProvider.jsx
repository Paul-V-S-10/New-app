import { createBrowserRouter } from 'react-router-dom'
import Parent from './Bulb Lightup/Parent/Parent'
import ParentOne from './Theme Changer/ParentOne'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Parent/>
    },
    {
        path:'/ThemeChanger',
        element: <ParentOne/>
    }
])