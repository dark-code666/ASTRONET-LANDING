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

export default function App() {
  return (
    <BrowserRouter basename="/ASTRONET-LANDING">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/belleek" element={<Belleek />} />
          <Route path="/salboy" element={<Salboy />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}