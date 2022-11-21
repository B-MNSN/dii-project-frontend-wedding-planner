import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/font/bootstrap-icons.css";
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
import WPN_Guest from './pages/WPN_Guest';
import WPN_theme from './pages/WPN_theme';
import WPN_food from './pages/WPN_food';
import WPN_location from './pages/WPN_location';
import WPN_dress from './pages/WPN_dress';
import WPN_photo from './pages/WPN_photo';
import WPN_card from './pages/WPN_card';
import WPN_gift from './pages/WPN_gift';
import Edittheme from './admin/Edit/Editthem';
import Editphoto from './admin/Edit/Editphoto';
import Editfood from './admin/Edit/Editfood';
import Editcard from './admin/Edit/Editcard';
import Editdress from './admin/Edit/Editdress';
import Editlocation from './admin/Edit/Editlocation';
import Editorganize from './admin/Edit/Editorganize';
import Editgift from './admin/Edit/Editgift';



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
        <Route path='/my_wedding_planner/:tran_id' element={<MyWDP/>}/>
        <Route path='/Adminbar' element={<Adminbar/>}/>
        {/* Admin */}
        <Route path='/Addtheme' element={<Addtheme/>}/>
        <Route path='/Addfood' element={<Addfood/>}/>
        <Route path='/Addlocation' element={<Addlocation/>}/>
        <Route path='/Adddress' element={<Adddress/>}/>
        <Route path='/Addphoto' element={<Addphoto/>}/>
        <Route path='/Addcard' element={<Addcard/>}/>
        <Route path='/Addgift' element={<Addgift/>}/>
        <Route path='/Addorganize' element={<Addorganize/>}/>

        {/*WEDDING_PLANNER */}
        <Route path='/WPN_Guest' element={<WPN_Guest/>}/>
        <Route path='/WPN_theme/:userid' element={<WPN_theme/>}/>
        <Route path='/WPN_food/:userid' element={<WPN_food/>}/>
        <Route path='/WPN_location/:userid' element={<WPN_location/>}/>
        <Route path='/WPN_dress/:userid' element={<WPN_dress/>}/>
        <Route path='/WPN_photo/:userid' element={<WPN_photo/>}/>
        <Route path='/WPN_card/:userid' element={<WPN_card/>}/>
        <Route path='/WPN_gift/:userid' element={<WPN_gift/>}/>
        {/* Edit */}
        <Route path='/Edittheme' element={<Edittheme/>}/>
        <Route path='/Editfood' element={<Editfood/>}/>
        <Route path='/Editphoto' element={<Editphoto/>}/>
        <Route path='/Editcard' element={<Editcard/>}/>
        <Route path='/Editdress' element={<Editdress/>}/>
        <Route path='/Editlocation ' element={<Editlocation/>}/>
        <Route path='/Editgift' element={<Editgift/>}/>
        <Route path='/Editorganize' element={<Editorganize/>}/>

      </Routes>
    </>
  );
}

export default App;
