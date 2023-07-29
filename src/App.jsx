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

function App() {
 const dispath = useDispatch()
 useEffect(() => {
  dispath(getAllproductsThunk())
 },[])

 const [token, setToken] = useSetState()

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductId/>}/>

        <Route element={<ProtectedRoutes />}>
               <Route path='/cart' element={<Cart/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
        </Route>
   
        
      </Routes>
    </div>
  )
}

export default App
