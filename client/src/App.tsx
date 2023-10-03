import './App.scss'
import {useLocation} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Error from './views/Error/Error';

function App() {
  const location = useLocation();
  return (
    <> 
    {location.pathname !== '/' && <Navbar />}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details/:id" element={<Detail />} />
      <Route path='/*' element={<Error />} />
    </Routes>
      
    </>
  )
}

export default App
