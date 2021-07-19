import React from 'react';
import goalkeeper from "../src/img/goalkeeper.png"
import logo from "../src/img/logo.png"
import football2 from "../src/img/football2.jpg";
import football3 from "../src/img/football3.jpg";
import Card from "./Card";
import Cards from "./Cards";
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Footer from './Footer';
// import Carousel from './Carousel';
const Home = () => {

    return(
        <>
        <Navbar imgsrc={logo}/>
        <section id="mid" className="d-flex align-items-center">
        <div className="container-fluid">
        <div className="row">

            {/* animation beg */}
            
            <div className="col-lg-5 col-md-12">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <img src={goalkeeper} class="homeimg" alt="" />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                    </div>
                </div>
            </div>
            {/* animation end */}

            {/* news section beg */}
            <div className="col-lg-7">
                <div className="row">
                    <div className="col-12">
                        <div className="row ">
                            {/* carousel beg */}
                            <div className="col-12 d-flex justify-content-center"><Card h="320" w="470" newsrc="https://www.youtube.com/embed/Ens5iyg"/></div>
                            {/* carousel beg */}
                            <div className="col-lg-6 col-sm-12 mb-3 d-flex justify-content-center"><Cards imgsrc={football2} title="Lazio defend new arrival Hysaj over initiation song" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."/></div>
                            <div className="col-lg-6 col-sm-12 mb-3 d-flex justify-content-center"><Cards imgsrc={football3} title="Is this the last LaLiga?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."/></div>

                        
                        </div>
                    </div>
                </div>
            </div>
            {/* news section end */}
        </div>
        </div>
        </section>
        <Footer/>
        </>
    )
}

export default Home;