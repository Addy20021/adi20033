import React from "react";
import { useNavigate } from 'react-router-dom';
export const BooksSection = ({ data }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleButtonClick = () => {
    // Navigate to the '/about' page when the button is clicked
    navigate('/deletebooks');
  };
  return (
    <div className="d-flex justify-content-around align-items-senter flex-wrap ">
      {data &&
        data.map((item, index) => (
          <div
            className="m-3"
            style={{
              width: "200px",
              height: "300px",
              border: "1px solid white",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                style={{
                  width: "200px",
                  height: "210px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                className="img-fluid"
                src={item.image}
                alt="/"
              />
            </div>
            <h6
              style={{ fontSize: "15px" }}
              className="text-black px-2 m-0 text-white"
            >
              {item.bookname.slice(0, 20)}...
            </h6>
            <b style={{ fontSize: "20px" }} className=" m-0 px-2 text-white">
              Rs. {item.price}
            </b>
            <div className="d-flex justify-content-around align-items-center ">
              <button className="btn btn-primary"  > UPDATE</button>
              <button className="btn btn-danger" onClick={handleButtonClick} > DELETE</button>
            </div>
          </div>
        ))}
    </div>
  );
};  

export default BooksSection;
