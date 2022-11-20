import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import WeddingPlanner from './pages/WeddingPlanner';
import Login from './pages/Login';
import Register from './pages/Register';
import MyWDP from './pages/MyWDP';
import Addtheme from './admin/Add/Addtheme';
import Adminbar from './admin/Adminbar';
import Addfood from './admin/Add/Addfood';
import Addlocation from './admin/Add/Addlocation';
import Adddress from './admin/Add/Adddress';
import Addphoto from './admin/Add/Addphoto';
import Addcard from './admin/Add/Addcard';
import Addgift from './admin/Add/Addgift';
import Addorganize from './admin/Add/Addorganize';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/wedding_planner/:tran_id' element={<WeddingPlanner/>}/>
        <Route path='/my_wedding_planner' element={<MyWDP/>}/>
        <Route path='/Adminbar' element={<Adminbar/>}/>
        <Route path='/Addtheme' element={<Addtheme/>}/>
        <Route path='/Addfood' element={<Addfood/>}/>
        <Route path='/Addlocation' element={<Addlocation/>}/>
        <Route path='/Adddress' element={<Adddress/>}/>
        <Route path='/Addphoto' element={<Addphoto/>}/>
        <Route path='/Addcard' element={<Addcard/>}/>
        <Route path='/Addgift' element={<Addgift/>}/>
        <Route path='/Addorganize' element={<Addorganize/>}/>
      </Routes>
    </>
  );
}

export default App;
