import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditProduct() {

  const { id } = useParams();

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


  // Get existing product
  useEffect(() => {
    getProduct();
  }, [id]);


  async function getProduct() {

    const response = await api.get(
      `/products/${id}`
    );

    const product = response.data;

    setFormData({
      name: product.name,
      brand: product.brand,
      category: product.category,
      type: product.type,
      price: product.price,
      image: product.image,
      description: product.description,
      color: product.color,
      material: product.material,
      size: product.size.join(", "),
      rating: product.rating,
      stock: product.stock
    });
  }


  // Handle input changes
  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }


  // Update product
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


    await api.put(
      `/products/${id}`,
      productData
    );


    // Go back to Products page
    navigate("/products");
  }


  return (

    <div className="form-container">

      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>

        {/* Product Name */}

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />


        {/* Brand */}

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />


        {/* Category */}

        <input
          type="text"
          name="category"
          placeholder="Category (Men/Women)"
          value={formData.category}
          onChange={handleChange}
        />


        {/* Product Type */}

        <input
          type="text"
          name="type"
          placeholder="Product Type"
          value={formData.type}
          onChange={handleChange}
        />


        {/* Price */}

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />


        {/* Image */}

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />


        {/* Description */}

        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
        />


        {/* Color */}

        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
        />


        {/* Material */}

        <input
          type="text"
          name="material"
          placeholder="Material"
          value={formData.material}
          onChange={handleChange}
        />


        {/* Sizes */}

        <input
          type="text"
          name="size"
          placeholder="Sizes (S, M, L, XL)"
          value={formData.size}
          onChange={handleChange}
        />


        {/* Rating */}

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />


        {/* Stock */}

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />


        {/* Submit */}

        <button
          type="submit"
          className="submit-btn"
        >
          Update Product
        </button>

      </form>

    </div>

  );
}

export default EditProduct;