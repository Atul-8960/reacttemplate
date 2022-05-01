import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Alert } from 'react-alert'

export const Navbar = () => {


  const[search, setSearch] = useState({
    search:"",
    });
   let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setSearch({...search, [name]:value});
    }

    console.log("the state is ==>", search);
       
  const history = useHistory();
  
  const routeChange = () =>{ 
    if(search.search == ''){
     return alert("Please write the movie name !!!");
    }
    // let path = `search?query=${search.search}`; 
    // history.push(path);

    window.location.href = `http://localhost:3000/search?query=${search.search}`;
  }
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
              <NavLink className="navbar-brand text-light" to="/">MovieDb</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{'margin-left': '1000px'}} >
                  <li className="nav-item">
                    <NavLink className="nav-link active text-light" aria-current="page" to="/">Popular</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/topRated">Top Rated</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-light"  to="/upComing">Upcomming</NavLink>            
                  </li>
                  <li className="nav-item">
                    <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search"  name="search" id="search" onChange={handleInput} placeholder="Search" aria-label="Search" />
                    </form>
                  </li>
                  <li className="nav-item">
                    <button class="btn btn-outline-light " type="submit" style={{ "height": "36px", "padding-top": "5px","margin-top": "auto"}}
                    onClick={routeChange}>Search</button>
                  </li>

                </ul>
              
              </div>
            </div>
          </nav>
                 
        </>
    )
}

export default Navbar;
