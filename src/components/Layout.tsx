import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-renaissance-offwhite selection:bg-renaissance-blue selection:text-white">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
