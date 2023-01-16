import './App.css';
import NavBar from './Components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import CreateProduct from './Components/Products/CreateProduct';
import UpdateProduct from './Components/Products/UpdateProduct';
import ProductList from './Components/Products/ProductList';
import ProductAdmin from './Components/Products/ProductAdmin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<ProductList />} />
          <Route exact path='/admin' element={<ProductAdmin />} />
          <Route exact path='/create-product' element={<CreateProduct />} />
          <Route exact path='/update-product' element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
