import React from 'react';
import Button from '@material-ui/core/Button';
import Uefa from './Uefa';
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {
      
        return ( 
            
            
            <>
  <div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-light bg-*">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><img className="logo" src={props.imgsrc} alt="" />
    <h className="heading">{props.line}</h></a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/live">Live</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Leagues
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <div className="row">
            <div className="col-lg-12 col-md-6"> 
            <div><NavLink className="dropdown-item" to='/uefa'> <img className="imprint" src="https://seeklogo.com/images/U/uefa-europa-league-2016-logo-BDCC44BCBF-seeklogo.com.png" alt="" />Uefa Europa</NavLink></div>
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://upload.wikimedia.org/wikipedia/commons/1/13/LaLiga.svg" alt="" />La Liga</a></div>
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://i.pinimg.com/originals/6b/a3/18/6ba318474e4cab7cef32a965fd6b982c.png" alt="" />Bundesliga</a></div>
            </div>
            <div className="col-lg-12 col-md-6">
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://cdn.freelogovectors.net/wp-content/uploads/2020/08/epl-premierleague-logo.png" alt="" />Premier League</a></div>
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://iconape.com/wp-content/files/fv/329739/svg/329739.svg" alt="" />FA Cup</a></div>
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://i.pinimg.com/originals/2e/86/50/2e86505cb4d1d37b4a40a30b3162169a.png" alt="" />Italian Serie A</a></div>
            </div>
            </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teams
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <div className="row">
            <div className="col-lg-12 col-md-6">  
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://secure.cache.images.core.optasports.com/soccer/teams/75x75/uuid_tsegdli3un1nylepqo0g8sk7.png" alt="" />India</a></div>
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://upload.wikimedia.org/wikipedia/sco/thumb/7/7a/Manchester_United_FC_crest.svg/1010px-Manchester_United_FC_crest.svg.png" alt="" />Manchester United</a></div>
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" alt="" />Real Madrid</a></div>
            </div>
            <div className="col-lg-12 col-md-6">
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://secure.cache.images.core.optasports.com/soccer/teams/75x75/uuid_agh9ifb2mw3ivjusgedj7c3fe.png" alt="" />Barcelona</a></div>
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://toppng.com/public/uploads/preview/liverpool-fc-logo-png-11536015318oxckbdkg0j.png" alt="" />Liverpool</a></div>
            <div><a className="dropdown-item" href="#"> <img className="imprint" src="https://image.pngaaa.com/347/2964347-middle.png" alt="" />Argentina</a></div>
            </div>
            </div>
            
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav both">
      <li><Button variant="outlined" color="primary" href="#outlined-buttons">Sign In</Button></li>
      <li className="mx-2"></li>
      <li><Button variant="outlined" color="primary" href="#outlined-buttons">Sign Up</Button></li>
      </ul>
    </div>
  </div>
</nav>
</div>
            
                
            </>
         );
    }
 
export default Navbar;