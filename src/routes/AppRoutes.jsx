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

function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes
                location={location}
                key={location.pathname}
            >
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />

                    <Route path="/list" element={<ListFilm />} />

                    <Route
                        path="/category/:slug"
                        element={<ListFilm2 type="category" />}
                    />

                    <Route
                        path="/country/:slug"
                        element={<ListFilm2 type="country" />}
                    />

                    <Route
                        path="/list/:slug"
                        element={<ListFilm2 type="topic" />}
                    />

                    <Route path="/search" element={<SearchResults />} />

                    <Route path="/movie/:slug" element={<MovieDetail />} />

                    <Route path="/watch/:slug" element={<WatchMovie />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AppRoutes;