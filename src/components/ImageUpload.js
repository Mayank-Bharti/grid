// components/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const ImageUpload = ({ selectedOption, onResult }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    
    // Call the API with the uploaded image
    processImage(file);
  };

  const processImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file); // Append the file to the form data

    try {
      // Make the API call to your Flask backend
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to form data
        },
      });

      // Pass the prediction result to the onResult function
      onResult(response.data.prediction);
    } catch (error) {
      console.error('Error uploading image:', error);
      onResult('Error uploading image'); // Handle errors gracefully
    }
  };

  return (
    <div className="image-upload">
      <h2>{selectedOption} - Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />}
    </div>
  );
};

export default ImageUpload;
