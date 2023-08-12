// import State from './useStateMan/State';
import './App.css';
import React, {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SharedLayout/>}>&nbsp;
        <Route index element={<Home />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/product' element={<Product />} />
        <Route path ='*' element={<Error />} />
      </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
