import React, { useState } from 'react';
import Nav1 from '../Navbar/Nav1.jsx';
import Second from '../Second/Second.jsx';
import './Admin.css';

const Admin = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [uploadError, setUploadError] = useState('');

  const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG'];

  const handleProductImg = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError('');
      } else {
        setImage(null);
        setImageError('Please add a valid image file.');
      }
    } else {
      console.error('No file selected.');
    }
  };

  // const handleAddToStock = () => {
  //   // Add your logic to handle adding the product to stock
  //   // For now, just log the product details
  //   console.log('Product Details:', {
  //     name,
  //     price,
  //     description,
  //     quantity,
  //     image,
  //   });
  // };

  const handleAddProducts= (e) =>{
    e.preventDefault();
    console.log(name,price,description,quantity);
    console.log(image);
  };


  return (
    <div>
      <Nav1 />
      <Second />

      <div className="container w-35 border mt-5" id="form">
      {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
              <br />
              <br />
            </>
          )}
        <form className="mt-5" onSubmit={handleAddProducts}>
          

          <div className="mb-3">
            <label htmlFor="UrunAdi" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="UrunAdi"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="UrunFiyati" className="form-label">
              Product Price
            </label>
            <input
              type="text"
              className="form-control"
              id="UrunFiyati"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="UrunAciklama" className="form-label">
              Product Description
            </label>
            <input
              type="text"
              className="form-control"
              id="UrunAciklama"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="UrunMiktar" className="form-label">
              Stock Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="UrunMiktar"
              required
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="UrunImage" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className="form-control"
              name="UrunImage"
              id="UrunImage"
              onChange={handleProductImg}
            />
          </div>

          {imageError && (
            <>
              <br />
              <br />
              <div className="error-msg">{imageError}</div>
            </>
          )}

          <br />
          <br />

          <div className="d-flex justify-content-center">
            <div
              className="btn btn-success form-control w-50 m-3"
              
            >
              Add to Stock
            </div>
          </div>
        </form>

        {uploadError && (
          <>
            <br />
            <br />
            <div className="error-msg">{uploadError}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
