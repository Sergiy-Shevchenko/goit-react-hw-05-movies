import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '4b93e172d3270cc5f7c85789f0b471e0'
const language = 'en-US'

export const fetchMovies = async() => {
  return await axios.get(`trending/all/day?api_key=${KEY}&language=${language}`) 
}

export const fetchSearch = async(query) => {
  return await axios.get(`search/movie?api_key=${KEY}&page=1&query=${query}&?&language=${language}&include_adult=false`) 
}

export const fetchDetails = async (id) => {
  return await axios.get(`movie/${id}?api_key=${KEY}&language=${language}`) 
}

export const fetchCredits = async(id) => {
  return await axios.get(`/movie/${id}/credits?api_key=${KEY}&language=${language}`) 
}

export const fetchReviews = async() => {
  return await axios.get(`movie/movie_id/reviews?api_key=${KEY}&language=${language}`) 
}