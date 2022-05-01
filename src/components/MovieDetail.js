import React,{useState, useEffect} from 'react'
import './FeaturedMovie.css';

import axios from "axios";
import {
    useParams,
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const { REACT_APP_API_KEY } = process.env;


export const MovieDetails = (props) => {
    let { id } = useParams();

    const movieBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`;
    const movieCastBaseUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${REACT_APP_API_KEY}&language=en-US`;


    console.log("id is===>",id);

    const [movieData, setMovieData] = useState([]);
    const [movieCastData, setMovieCastData] = useState([]);


    const getMovieDetails = async () => {
      axios.get(movieBaseUrl).then((response) => {
        setMovieData(response.data);
      });
    }

    const getMovieCastDetails = async () => {
        axios.get(movieCastBaseUrl).then((response) => {
            setMovieCastData(response.data);
        });
      }

    useEffect(() => {
        getMovieDetails();
        getMovieCastDetails();   
    },[])
    
    if (!movieData) return null;
    console.log("movieDetails are ====>", movieData)
    console.log("movieCastDetails are ====>", movieCastData)

    return (
        <div className="container-fluid">
            <section className="featured" style={{
                "margin-top": '7px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieData.backdrop_path})`
            }}>
                <div className="featured--vertical">
                    <div className="featured--horizontal">
                        <div>
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="Card image cap" style={{"height":"100px","width": "100px"}} />

                        </div>
                        <div className="featured--name" style={{"color": "white"}}>
                            {movieData.title}
                        </div>
                        <div className="featured--info">
                            <div className="featured--points">Ratings : {movieData.vote_average} </div>
                            <div className="featured--year">{movieData.release_date}</div>
                            {/* <div className="featured--seasons">{movieData.number_of_seasons} temporada{movieData.number_of_seasons !== 1 ? 's' : ''}</div> */}
                        </div>
                        <b style={{"color": "white","font-size": "22px"}}>overview</b>
                        <div className="featured--description">{movieData.overview}</div>

                        {/* <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div> */}
                    </div>
                </div>
            </section>
            <b style={{"color": "white","font-size": "22px"}}>Cast</b>
            <div className="container-fluid">
            <div className="row text-center">
            {Array.isArray(movieCastData.cast) && movieCastData.cast.map(object => (
                 <>
                            
                              <div className="col-10 col-md-2 mt-5" key={object.id}>
                              <div className="card" >
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${object.profile_path}`} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{object.name}</h5>
                                    <p className="card-text">character: {object.character}</p>
                                    {/* <Link to="/movieDetails">More Details</Link> */}
                                    {/* <Link to={'/movieDetail/'+object.id} id = {object.id}>View Product</Link> */}
                                </div>
                                </div>
                    </div>
                 </>
                 
             ))}

            </div>
            </div>

        </div>
    )
}

export default MovieDetails;
