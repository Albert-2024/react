// import State from './useStateMan/State';
import './App.css';
import React, {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Error from './pages/Error'


function App() {
  return (
    <BrowserRouter>
   <nav>our navbar</nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/about' element={<About />} />
        <Route path ='/product' element={<Product />} />
        <Route path ='*' element={<Error />} />
      </Routes>
    <footer>our footer</footer>
    </BrowserRouter>
   
  );
}

export default App;
