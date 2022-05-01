import React,{useState, useEffect} from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const { REACT_APP_API_KEY } = process.env;


const baseURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`  


export const TopRated = () => {
    const [data, setData] = useState([]);

    const getDetails = async () => {
      axios.get(baseURL).then((response) => {
        setData(response.data);
      });
    }

    useEffect(() => {
        getDetails();   
    },[])
    
    if (!data) return null;
    console.log("the details are ===>", data)
    return (
        <div className="container mt-5">
            <div className="row text-center">
            {Array.isArray(data.results) && data.results.map(object => (
                 <>
                              <div className="col-10 col-md-3 mt-5" key={object.id}>
                              <div className="card" >
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${object.poster_path}`} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{object.original_title}</h5>
                                    <p className="card-text">{object.vote_average}</p>
                                    {/* <Link to="/movieDetails">More Details</Link> */}
                                    <Link to={'/movieDetail/'+object.id} >View </Link>
                                </div>
                                </div>
                    </div>
                 </>
                 
             ))}

            </div>
        </div>
    )
}

export default TopRated;
