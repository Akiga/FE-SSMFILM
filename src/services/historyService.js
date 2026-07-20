import API from "./api";

export const addHistory = (data) =>
    API.post("/history", data);

export const getHistory = () =>
    API.get("/history");

export const removeHistory = (slug) =>
    API.delete(`/history/${slug}`);