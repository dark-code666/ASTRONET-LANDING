/* import Home from './pages/Home'

export default function App() {
  return <Home />
} */

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Belleek from './pages/Belleek'; 
import Salboy from './pages/Salboy';
import Contact from './pages/Contact';
import Whatwedo from './pages/Whatwedo';
import Company from './pages/whatwedo/Company';
import Booking from './pages/whatwedo/Booking';
import Community from './pages/whatwedo/Community';
import ECommerce from './pages/whatwedo/ECommerce';


export default function App() {
  return (
    <BrowserRouter basename="/ASTRONET-LANDING">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/belleek" element={<Belleek />} />
          <Route path="/salboy" element={<Salboy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/whatwedo">
           <Route index element={<Whatwedo />} />
           <Route path="Company-Websites" element={<Company/>} />
           <Route path="Booking" element={<Booking/>} />
           <Route path="Community-Platforms" element={<Community/>} />
           <Route path="eCommerce" element={<ECommerce/>} />

          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}