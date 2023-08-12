// import State from './useStateMan/State';
import './App.css';
import React, {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SinglePrdt from './pages/SinglePrdt';
import Products from './pages/Products';
import products from './data';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SharedLayout/>}>&nbsp;
        <Route index element={<Home />} />
        <Route path ='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/Product/:productID' element={<SinglePrdt />} />
        <Route path ='*' element={<Error />} />
      </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
