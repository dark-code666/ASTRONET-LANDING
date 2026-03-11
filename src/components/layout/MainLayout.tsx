import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="min-h-dvh bg-white text-zinc-950">
      <Navbar /> 
      <main>
        {/* Aquí se renderizarán tus páginas como Home, Belleek, etc. */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}