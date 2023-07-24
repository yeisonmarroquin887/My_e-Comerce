import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllproductsThunk } from './store/slice/products.slice'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'

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
        <Route path='/product/:id' element={<ProductId/>}/>
      </Routes>
    </div>
  )
}

export default App
