import AuthLayouts from "../layouts/AuthLayouts";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"



const config = [
    {
        element: <Home />,
        path:'/',
        Layout: AuthLayouts
    },
    {
        element: <SignIn />,
        path:'/signin',
        Layout: DefaultLayout
    }
]

export default config