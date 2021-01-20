import React from 'react';
import web from "../src/image/developer.svg";
 const Homepage = () => {
    return(
        <>
        <section className="header">
        <div className="container-fluid">
           <div className="row">
               <div className="col-md-6  pt-5 mx-auto left">
                   <p className="title-text">
                   Lorem ipsum dolor sit amet,
                   </p>
                   <p className="sub-text">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi
                       ut</p>
                       <a  className=" blue-btn">Get Started</a>
               </div>
               <div className="col-md-6">
                   <img src={web} alt="img"  className="vector-img"/>
               </div>
               </div> 
        </div>
        </section>
        </>
    )  
};

export default Homepage;