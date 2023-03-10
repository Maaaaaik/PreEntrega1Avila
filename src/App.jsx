import axios from 'axios'
import { useEffect, useState } from 'react'
import { Await, BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProductos(res.data)
  }

  useEffect(() => {
    getProductos()
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1>Malakita accesorios</h1>
        <Routes>
          <Route path='/' element={<ItemListContainer productos={productos} />} />
          <Route path='/category/:id' element={<ItemListContainer productos={productos} />} />
          <Route path='/item/:id' element={<ItemDetailContainer productos={productos} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
