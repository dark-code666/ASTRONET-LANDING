/* import Home from './pages/Home'

export default function App() {
  return <Home />
} */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Belleek from './pages/Belleek'; 
import Salboy from './pages/Salboy';
import Contact from './pages/Contact';
import Whatwedo from './pages/Whatwedo';
import Booking from './pages/whatwedo/Outsourcing';
import ECommerce from './pages/whatwedo/ECommerce';
import Subscriptions from './pages/Subscriptions';
import IA from './pages/whatwedo/IA';
import SoftwareDevelopment from './pages/whatwedo/SoftwareDevelopment';
import Outsourcing from './pages/whatwedo/Outsourcing';
import About from './pages/About';


export default function App() {
  return (
    <BrowserRouter basename="/ASTRONET-LANDING">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/belleek" element={<Belleek />} />
          <Route path="/salboy" element={<Salboy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/whatwedo">
           <Route index element={<Whatwedo />} />
           <Route path="Software-Development" element={<SoftwareDevelopment/>} />
           <Route path="Outsourcing" element={<Outsourcing/>} />
           <Route path="Artificial-Intelligence" element={<IA/>} />
           <Route path="eCommerce" element={<ECommerce/>} />
          </Route>
          <Route path="About-Us" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}