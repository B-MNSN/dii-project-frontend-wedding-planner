import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import WeddingPlanner from './pages/WeddingPlanner';
import Login from './pages/Login';
import Register from './pages/Register';
import MyWDP from './pages/MyWDP';
import Addtheme from './admin/Add/Addtheme';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/wedding_planner' element={<WeddingPlanner/>}/>
        <Route path='/my_wedding_planner' element={<MyWDP/>}/>
      </Routes> */}
      
      <Addtheme/>
    </>
  );
}

export default App;
