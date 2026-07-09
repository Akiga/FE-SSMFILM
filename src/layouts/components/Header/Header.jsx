import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../../components/Logo";
import Navbar from "../../../components/Navbar";
import SearchBar from "../../../components/SearchBar";
import UserMenu from "../../../components/UserMenu";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow">
            <div className="max-w-8xl mx-auto h-16 px-5 flex items-center justify-between">

                <Logo />

                <div className="hidden lg:block">
                    <Navbar />
                </div>

                <div className="hidden lg:block">
                    <SearchBar />
                </div>

                <UserMenu />

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden"
                >
                    {open ? <X /> : <Menu />}
                </button>

            </div>

            {open && (
                <div
                    className="absolute
                        top-16
                        left-0
                        w-full
                        max-h-[calc(100vh-64px)]
                        overflow-y-auto
                        bg-slate-900"
                    >
                    <Navbar mobile />
                </div>
            )}
        </header>
    );
}