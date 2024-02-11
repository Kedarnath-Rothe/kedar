import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AdminLayout } from './components/layouts/Admin-Layout';
import About from './pages/About';
import AdminContacts from './pages/Admin-Contacts';
import AdminUpdate from './pages/Admin-Update';
import AdminUsers from './pages/Admin-Users';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Service from './pages/Service';

const App = () => {
   return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/*' element={<Error/>} />
        <Route path='/admin' element={<AdminLayout/>} >
        </Route>
          <Route path='/admin/users' element = {<AdminUsers/>} />
          <Route path='/admin/user/:id/edit' element = {<AdminUpdate/>} />
          <Route path='/admin/contacts' element = {<AdminContacts/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
}

export default App;