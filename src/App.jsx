import { Route, Routes } from 'react-router-dom'
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

function App() {
 const dispath = useDispatch()
 useEffect(() => {
  dispath(getAllproductsThunk())
 },[])





  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductId/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
    </div>
  )
}

export default App
