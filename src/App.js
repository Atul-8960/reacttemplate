import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import MovieDetail from './components/MovieDetail';
import Search from './components/Search';









function App() {
  return (
    <>
    <Navbar />

    <Route exact path ="/">
    <Home />
    </Route>

    <Route path ="/topRated">
    <TopRated />
    </Route>

    <Route path ="/upComing">
    <Upcoming />
    </Route>

    <Route exact path='/movieDetail/:id'>
    <MovieDetail />
    </Route>

    <Route path ="/search">
    <Search />
    </Route>


    

    </>
  );
}

export default App;
