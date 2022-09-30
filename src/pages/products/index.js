import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/features/product/product.actions";
import MOdal from "../../components/UI/modal";

const Products = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);

  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleClose = () => {
    const form = new FormData();

    form.append("name", name);
    form.append("price", price);
    form.append("quantity", quantity);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }

    dispatch(createProduct(form));
    console.log(form);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const createCategoryOptions = (categories = [], options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.name,
      });
      if (category.children.length > 0) {
        createCategoryOptions(category.children, options);
      }
    }
    return options;
  };

  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };

  const renderProducts = () => {
    return (
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    )
  }

  return (
    <Layout sidebar>
      <div className="flex justify-between px-5 w-auto  ">
        <h3 className="text-2xl">Products</h3>
        <button className="border text-white bg-blue-800" onClick={handleShow}>
          add
        </button>
      </div>
      <div>
        {renderProducts()}
      </div>
      <MOdal 
        show={show}
        handleClose={handleClose}
        modalTitle='Add New Product'
      >
        <input
          className="form-control mb-2"
          value={name}
          placeholder="enter product name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mb-2"
          value={price}
          placeholder="enter price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="form-control mb-2"
          value={quantity}
          placeholder="enter quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          className="form-control mb-2"
          value={description}
          placeholder="enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="form-control mb-2"
        >
          <option>Select Category</option>

          {createCategoryOptions(categories.categoryList).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {productPictures.length > 0
          ? productPictures.map((pic, i) => <div key={i}>{pic.name}</div>)
          : null}
        <input
          type="file"
          name="productPicture"
          onChange={handleProductPictures}
        />
      </MOdal>
    </Layout>
  );
};

export default Products;
