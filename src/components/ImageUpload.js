// components/ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = ({ selectedOption, onResult }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    // You would send this image to your backend or ML model here
    processImage(file);
  };

  const processImage = (file) => {
    // Mock processing. Replace this with the API call to your model.
    const mockResult = {
      OCR: [
        { label: 'Product Name', value: 'Fresh Apples' },
        { label: 'Brand', value: 'Apple Farms' },
        { label: 'Expiry Date', value: '12/2024' },
        { label: 'MRP', value: '₹120' },
      ],
      Freshness: 'Freshness Score: 85% - Fresh',
      Quantity: 'Detected Quantity: 12 units',
    };

    setTimeout(() => {
      onResult(mockResult[selectedOption]);
    }, 1500); // Simulating API call delay
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