import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(31,79,139,0.08),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(110,168,217,0.08),transparent_20%)]" />
      <Header />
      <main className="relative flex-grow pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
