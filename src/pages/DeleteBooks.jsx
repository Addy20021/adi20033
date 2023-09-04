import React, { useState } from "react";
import axios from "axios";

const DeleteBook = () => {
  const [Data, setBookId] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setBookId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:1000/api/v1/books/${Data}`
      );

      if (response.data.success) {
        setMessage("Book deleted successfully.");
        setBookId(""); // Clear the input field
      } else {
        setMessage("Failed to delete the book.");
      }
    } catch (error) {
      setMessage("An error occurred while deleting the book.");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="bg-dark justify-content-center align-items-center       " style={{ height: "100vh" }}>
        
        <label htmlFor="bookId text-white" className="form-label">
          Book name
        </label>
        <input
          type="text"
          className="form-control container-fluid"
          id="bookId"
          placeholder="Enter Book ID"
          value={Data._id}
          onChange={handleInputChange}
        />
      
      <button className="btn btn-danger"onClick={handleDelete}>
        Delete Book
      </button>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default DeleteBook;
