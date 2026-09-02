import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    type: "",
    price: "",
    image: "",
    description: "",
    color: "",
    material: "",
    size: "",
    rating: "",
    stock: ""
  });


  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }


  async function handleSubmit(e) {

    e.preventDefault();

    const productData = {
      ...formData,

      price: Number(formData.price),

      rating: Number(formData.rating),

      stock: Number(formData.stock),

      size: formData.size
        .split(",")
        .map((size) => size.trim())
    };

    await api.post(
      "/products",
      productData
    );

    navigate("/products");
  }


  return (

    <div className="form-container">

      <h1>Add New Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />


        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />


        <input
          type="text"
          name="category"
          placeholder="Category (Men/Women)"
          value={formData.category}
          onChange={handleChange}
        />


        <input
          type="text"
          name="type"
          placeholder="Product Type"
          value={formData.type}
          onChange={handleChange}
        />


        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />


        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />


        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
        />


        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
        />


        <input
          type="text"
          name="material"
          placeholder="Material"
          value={formData.material}
          onChange={handleChange}
        />


        <input
          type="text"
          name="size"
          placeholder="Sizes (S, M, L, XL)"
          value={formData.size}
          onChange={handleChange}
        />


        <input
          type="number"
          name="rating"
          placeholder="Rating"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />


        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />


        <button
          type="submit"
          className="submit-btn"
        >
          Add Product
        </button>

      </form>

    </div>

  );
}

export default AddProduct;