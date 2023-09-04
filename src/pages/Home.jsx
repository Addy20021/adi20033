import React from 'react';
import "./Home.css";    
import { Link } from 'react-router-dom';
 export const Home = () => {
    return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{fontSize: "90px" }}>BOOK STORE </h2>
          <h3 style={{fontSize: "50px" }}> FOR U</h3>
          <p className="mb-0" style ={{color: "silver"}}> checkout the book From here</p>
          <Link  to="/books" className='viewbook my-3'> View Books</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
          style={{ height: "91.5vh" }}
        >
          <img className="img-fluid homeimg"
          src="https://thumbs.dreamstime.com/b/woman-reading-book-near-river-cloudy-day-closeup-woman-reading-book-near-river-cloudy-day-165661983.jpg" alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default  Home
