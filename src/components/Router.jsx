import { Routes, Route } from 'react-router-dom'
import Home from "../views/Home";
import AboutUs from '../views/AboutUs';
import Contact from '../views/Contact';
import Catalog from '../views/Catalog';
import Navbar from '../views/partials/Navbar';
import Footer from '../views/partials/Footer';
import RegisterProduct from '../views/ReigsterProduct';

const Router = () =>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/nosotros' element={<AboutUs/>} />
                <Route path='/contactanos' element={<Contact/>} />
                <Route path='/catalogo' element={<Catalog/>} />
                <Route path='/registrar-producto' element={<RegisterProduct/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default Router;