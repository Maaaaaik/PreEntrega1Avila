
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Await, BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer'
import MultipleSelect from './components/CategoryList/CategoryList'
import db from "../db/Firebase-config"
import { collection, getDocs } from 'firebase/firestore'
import Cart from './components/Cart/Cart'


function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems)
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };





  const itemsCollectionRef = collection(db, "items");
  const [productos, setProductos] = useState([])

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef);
    setProductos(
      itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getItems();
  }, []);


  const theme = createTheme({
    palette: {
      primary: {
        main: '#529f88',
        light: '#74b29f',
        dark: '#396f5f'
      },
    },
    typography: {
      fontFamily: 'Product Sans Medium',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
       @import url('https://fonts.cdnfonts.com/css/white-love');
       @import url('https://fonts.cdnfonts.com/css/product-sans')
}
      `,
      },
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Navbar cartItems={cartItems} />
            <div className='TituloYCategoria'>
              <h1>Malakita tienda</h1>
              <MultipleSelect productos={productos} />

            </div>
            <Routes>
              <Route path='/' element={<ItemListContainer onAdd={onAdd} onRemove={onRemove} productos={productos} />} />
              <Route path='/category/:category' element={<CategoryListContainer productos={productos} />} />
              <Route path='/item/:id' element={<ItemDetailContainer productos={productos} />} />
              <Route path='/cart' element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
