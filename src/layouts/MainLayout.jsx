import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white">
            <Navbar />

      <main className="min-h-[80vh]">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}