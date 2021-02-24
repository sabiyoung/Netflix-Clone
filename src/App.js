
import './App.css';
import Row from "../src/Components/Row/Row";
import requests from './requests';
import Banner from './Components/Banner/Banner';
import Nav from "../src/Components/Nav/Nav"

function App() {
  return (
    <div className="app">
      <Nav />
    <Banner />
     <Row title="NETFLIX ORIGINALS"
     fetchUrl={requests.fetchNetflixOriginals} 
     isLargeRow/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrerMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
     <Row title="Mystery"fetchUrl={requests.fetchMystery} />
      <Row title="SciFi"fetchUrl={requests.fetchSciFi} />
      <Row title="Western"fetchUrl={requests.fetchWestern} />
      <Row title="Animation"fetchUrl={requests.fetchAnimation} />
      <Row title="Netflix TV"fetchUrl={requests.fetchTV} /> 
      <Row title="Crime"fetchUrl={requests.fetchCrime} />
      <Row title="Fantasy"fetchUrl={requests.fetchFantasy} />
      <Row title="Drama"fetchUrl={requests.fetchDrama} />
     <Row title="TV Movie"fetchUrl={requests.fetchTVMovie} />
     <Row title="History"fetchUrl={requests.fetchHistory} />
    </div>
  );
}


export default App;





