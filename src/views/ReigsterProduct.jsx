import React, { useState } from "react";

const RegisterProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",  
    entryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto registrado:", formData);
    
    alert("Producto registrado exitosamente");
    setFormData({
      name: "",
      price: "",
      quantity: "",
      category: "",  
      entryDate: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Registrar Producto</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 border rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nombre del Producto
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2 text-gray-700"
            placeholder="Ejemplo: Producto A"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-semibold mb-2"
          >
            Precio
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded p-2 text-gray-700"
            placeholder="Ejemplo: 100.00"
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-semibold mb-2"
          >
            Cantidad
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border rounded p-2 text-gray-700"
            placeholder="Ejemplo: 10"
            min="0"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-semibold mb-2"
          >
            Categoría
          </label>
          <select name="" id="">
            <option value="">{}</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="entryDate"
            className="block text-gray-700 font-semibold mb-2"
          >
            Fecha de Entrada
          </label>
          <input
            type="date"
            id="entryDate"
            name="entryDate"
            value={formData.entryDate}
            onChange={handleChange}
            className="w-full border rounded p-2 text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Registrar Producto
        </button>
      </form>
    </div>
  );
};

export default RegisterProduct;
