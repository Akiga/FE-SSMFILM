import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import WatchMovie from "../pages/Watch/Watch";
import ListFilm from "../pages/ListFilm/ListFilm";
import ListFilm2 from "../pages/ListFilm/ListFilm2";
import SearchResults from "../pages/SearchMovie/SearchMovie";
import NotFound from "../pages/Error/Error";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AccountLayout from "../layouts/AccountLayout"
import Profile from "../pages/Profile/Profile";
import Favorites from "../pages/Profile/Favorites";
import Histories from "../pages/Profile/History";


function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes
                location={location}
                key={location.pathname}
            >
                <Route element={<MainLayout />}>
                    {/* Auth */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Home */}
                    <Route path="/" element={<Home />} />

                    {/* Movie */}
                    <Route path="/movie/:slug" element={<MovieDetail />} />
                    <Route path="/watch/:slug" element={<WatchMovie />} />

                    {/* List */}
                    <Route path="/list" element={<ListFilm />} />
                    <Route path="/list/:slug" element={<ListFilm2 type="topic" />} />
                    <Route path="/category/:slug" element={<ListFilm2 type="category" />} />
                    <Route path="/country/:slug" element={<ListFilm2 type="country" />} />

                    {/* Search */}
                    <Route path="/search" element={<SearchResults />} />

                    {/* Account */}
                    <Route path="/account" element={<AccountLayout />}>
                        <Route index element={<Profile />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="favorites" element={<Favorites />} />
                        <Route path="history" element={<Histories />} />
                        {/* <Route path="change-password" element={<ChangePassword />} />
                        <Route path="settings" element={<Settings />} /> */}
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AppRoutes;