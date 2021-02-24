const API_KEY = "5451a658978e1ebf0c141418edf0b6e6";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchTVMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
};
export default requests;
