import React, { useEffect, useState } from "react";
import './PhotoUpload.css';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; 

function PhotoUpload() {
  const progressList = useSelector((store) => store.userProgressReducer.progress);
  const dispatch = useDispatch(); 
  const { id } = useParams(); 

  console.log('User ID is:', id);

  const [selectedPhoto, setSelectedPhoto] = useState(null);  // State to store the selected photo

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_PROGRESS', payload: id });
  }, [dispatch, id]);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedPhoto(file);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPhoto) {
      alert("Please select a photo first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedPhoto);
    formData.append("user_id", id);  
    formData.append("day", 1);  

    // Send the file to the backend
    fetch("http://localhost:5001/api/upload", {
        method: "POST",
        body: formData,
      })
      
      .then((response) => response.json())
      .then((data) => {
        console.log("Upload successful:", data.fileUrl);
        alert("Photo uploaded successfully!");
        
        // Now that the Photo is uploaded to S3, lets also add the Initial Photo URL to userImage table

        
            dispatch({
            type: 'SET_INITIAL_IMAGE',
            payload: {
                user_id: id,
                initial_photo: data.fileUrl,
              },
          });
        


      })
    
      .catch((error) => {
        console.error("Error uploading photo:", error);
        alert("Failed to upload photo.");
      });
  };

  return (
    <div>
      <h4>BCX</h4>
      <h4>Phase 1: Build</h4>
      <h1>Start</h1>

      <div className="photo-upload-container">
        <h3>Start Building Your Best Self</h3>
        <p>Your journey to empowerment, confidence, and strength begins now. Every step builds the foundation of the woman you're becoming. Submit your photo now, and don't forget to snap tomorrow's first thing in the morning. This is your time to take ownership—let's go.</p>

        {/* Form to select and upload photo */}
        <form onSubmit={handleSubmit}>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            required
          />
          <button className="submit-button" type="submit">
            Submit Your Photo
          </button>
        </form>
      </div>

      <div>
        {progressList.map((item) => (
          <div key={item.user_id}>
            <p>User ID: {item.user_id}</p>
            <p>Step: {item.step}</p>
            <p>Progress: {item.progress}</p>
            <p>Timestamp: {item.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoUpload;