import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import PageTransition from "../components/common/PageTransition";
export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white">
            <Navbar />

      <main className="min-h-[80vh]">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />

    </div>
  );
}