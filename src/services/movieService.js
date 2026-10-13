import axios from "axios";
import API from "./api";

export const getHome = async () => {
  const response = await API.get("/home");
  return response.data.data;
};

export const getCategories = async () => {
    const res = await API.get("/categories");
    return res.data.data;
};

export const getCountries = async () => {
    const res = await API.get("/countries");
    return res.data.data;
};

export const getList = async (page = 1) => {
  const res = await API.get(`/list?page=${page}`);
  return res.data.data;
}

export const searchMovies = async (keyword, page = 1) => {
  const res = await API.get(
    `/search?keyword=${encodeURIComponent(keyword)}&page=${page}`);
  return res.data.data.movies.data;
}

export const getTopic = async (slug, page = 1) => {
  const res = await API.get(`/list/${slug}?page=${page}`);
  return res.data.data.movies.data;
}

export const getListByCountry = async (slug, page = 1) => {
  const res = await API.get(`/country/${slug}?page=${page}`);
  return res.data.data.movies.data;
}

export const getListByCategory = async (slug, page = 1) => {
  const res = await API.get(`/category/${slug}?page=${page}`);
  return res.data.data.movies.data;
}

export const getMovieDetail = async (slug) => {
  try {
    const res = await API.get(`/movie/${slug}`);
    return res.data.data.detailFilm;
  } catch (err) {
    console.error(`Không lấy được phim: ${slug}`, err);
    return null;
  }
};

export const getWatchMovie = async (slug, episode) => {
    const res = await API.get(
        `/watch/${slug}?ep=${episode || ""}`
    );
    return res.data.data;
}

