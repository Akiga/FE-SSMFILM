import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import WatchMovie from "../pages/Watch/Watch";
import ListFilm from "../pages/ListFilm/ListFilm";
import ListFilm2 from "../pages/ListFilm/ListFilm2";
import SearchResults from "../pages/SearchMovie/SearchMovie";
import NotFound from "../pages/Error/Error";

function AppRoutes() {
  return (
    <Routes>
    <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/list" element={<ListFilm />} />
        
        <Route path="/category/:slug" element={<ListFilm2 type="category" />} />

        <Route path="/country/:slug" element={<ListFilm2 type="country" />} />

        <Route path="/list/:slug" element={<ListFilm2 type="topic" />} />

        <Route path="/search" element={<SearchResults />} />

        <Route path="/movie/:slug" element={<MovieDetail />} />
        

        <Route path="/watch/:slug/" element={<WatchMovie />} />
    </Route>

    <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;