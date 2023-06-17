
import './App.css';
import { useGlobalContext } from './Context';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal'; 
import Search from './components/Search';


function App() {
  const {showModal} = useGlobalContext();
  return (
    <main>
       <Search />
       
       <Meals />
       {showModal &&<Modal />}
    </main>
      
  

  );
}

export default App;
