import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllproductsThunk } from './store/slice/products.slice'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useSetState } from 'react-use'
import Logeado from './pages/Logeado'
import RecoverPassword from './pages/RecoverPassword'
import UpdatePassword from './pages/UpdatePassword'
import Inicio from './pages/Inicio'
import LoginAdmin from './pages/LoginAdmin'
import Administrator from './pages/Administrator'

function App() {
 const dispath = useDispatch()
 useEffect(() => {
  dispath(getAllproductsThunk())
 },[])


  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/loginadmin' element={<LoginAdmin/>}/>
        <Route path='/administrator' element={<Administrator/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductId/>}/>
        <Route path='/reset_password' element={<RecoverPassword/>}/>
        <Route path='/reset_password/:token' element={<UpdatePassword/>}/>

        <Route element={<ProtectedRoutes />}>
        <Route path='/logeado' element={<Logeado/>}/>
               <Route path='/cart' element={<Cart/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
        </Route>
   
        
      </Routes>
    </div>
  )
}

export default App
