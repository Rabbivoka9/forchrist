import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import Emision from './Pages/Emision'
import Predication from './Pages/Predication'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/Emision'element={<Emision/>}></Route>
        <Route path='/Predication'element={<Predication/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
