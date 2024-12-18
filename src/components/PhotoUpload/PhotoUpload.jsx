import React, { useEffect, useState } from "react";
import './PhotoUpload.css';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProgressBar from '../ProgressBar/ProgressBar';
import ButtonToGo from "../ButtonToGo/ButtonToGo";
function PhotoUpload() {
  const progressList = useSelector((store) => store.userProgressReducer.progress);
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
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
    fetch("http://localhost:5001/api/upload/upload", {
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
          // Navigate

        });
      })
      .catch((error) => {
        console.error("Error uploading photo:", error);
        alert("Failed to upload photo.");
      });
  };

  const handleComplete = (event) => {
    event.preventDefault();
    setIsComplete(!isComplete);
  };

  return (
    <div>
      <div className="mycontainer" >
        <h1 style={{marginLeft:'10px'}}>Phase 1: Build</h1>
      </div>

      <div className="photo-upload-cont" >
        <h3 style={{fontSize:'20px'}}>Start Building Your Best Self</h3>
        <p className="para">Your journey to empowerment, confidence, and strength begins now. Every step builds the foundation of the woman you're becoming.
          Submit your photo now, and don't forget to snap tomorrow's first thing in the morning. This is your time to take ownership—let's go.</p>

        {/* Form to select and upload photo */}
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className='inputPhoto'
            accept="image/*"
            onChange={handleFileChange}
            required
          />
       

          <ButtonToGo
             type="submit"
            path={`/VideoLauncher/${id}`}
            label='Submit Your Photo' />

          
        </form>
      </div>

      <div className="progress-container" onChange={handleComplete}>
        {progressList.map((item) => (
          <div key={item.user_id}>


            <ProgressBar value={item.step} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoUpload;
