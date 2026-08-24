import { useState } from "react";

import { Menu, X, Search, ArrowLeft } from "lucide-react";

import Logo from "../../../components/common/Logo";
import Navbar from "../../../components/layout/Navbar";
import SearchBar from "../../../components/common/SearchBar";
import UserMenu from "../../../components/layout/UserMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow">
      
      {/* =========================
          MOBILE SEARCH
      ========================== */}
      {searchOpen ? (
        <div className="flex h-16 items-center gap-2 px-4">
          
          {/* Back */}
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              transition
              hover:bg-slate-800
            "
            aria-label="Quay lại"
          >
            <ArrowLeft size={22} />
          </button>

          {/* Search */}
          <SearchBar
            mobile
            autoFocus
            onSearch={() => setSearchOpen(false)}
          />

          {/* Close */}
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              transition
              hover:bg-slate-800
            "
            aria-label="Đóng tìm kiếm"
          >
            <X size={22} />
          </button>

        </div>
      ) : (
        /* =========================
           NORMAL HEADER
        ========================== */
        <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-5">

          {/* Logo */}
          <Logo />

          {/* Desktop Navbar */}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1">

            {/* Mobile Search */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                transition
                hover:bg-slate-800
                lg:hidden
              "
              aria-label="Tìm kiếm"
            >
              <Search size={22} />
            </button>

            {/* User */}
            <UserMenu />

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                transition
                hover:bg-slate-800
                lg:hidden
              "
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      )}

      {/* =========================
          MOBILE MENU
      ========================== */}
      {!searchOpen && open && (
        <div
          className="
            absolute
            left-0
            top-16
            w-full
            max-h-[calc(100vh-64px)]
            overflow-y-auto
            bg-slate-900
          "
        >
          <Navbar mobile />
        </div>
      )}
    </header>
  );
}