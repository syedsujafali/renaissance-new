import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieSettings from './CookieSettings';

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <main className="relative flex-grow pt-28">
        <Outlet />
      </main>
      <Footer />
      <CookieSettings />
    </div>
  );
}
