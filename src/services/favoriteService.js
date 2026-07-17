import axios from "axios";
import API from "./api";

export const getFavorites = async () => {
  const res = await API.get("/favorites");
  return res.data;
};

export const addFavorite = async (slug) => {
  const res = await API.post("/favorites", { slug });
  return res.data;
};

export const removeFavorite = async (slug) => {
  const res = await API.delete(`/favorites/${slug}`);
  return res.data;
};

export const checkFavorite = async (slug) => {
  const res = await API.get(`/favorites/check/${slug}`);
  return res.data;
};