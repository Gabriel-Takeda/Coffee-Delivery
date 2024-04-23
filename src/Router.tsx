import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLheme"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { CheckoutFilled } from "./pages/CheckoutFilled"
import { Success } from "./pages/Sucess"

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
                <Route path='/Checkout-filled' element={<CheckoutFilled/>}/>
                <Route path='/Success' element={<Success/>}/>
            </Route>
        </Routes>
    )
}

export { Router }