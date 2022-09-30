import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import NewMOdal from "../../components/UI/modal";
import { createCategory } from "../../redux/features/category/category.actions";

export const Categories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const handleClose = () => {
    const form = new FormData();

    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);
    dispatch(createCategory(form));
    setCategoryName("");
    setParentCategoryId("");
    setCategoryImage("");
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const renderCategories = (categories = []) => {
    let allCategories = [];
    for (let category of categories) {
      allCategories.push(
        <li className="mx-3" key={category.name}>
          {category.name}

          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return allCategories;
  };

  const createCategoryList = (categories = [], options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  return (
    <Layout sidebar>
      <div className="w-full  ">
        <div className="flex justify-between px-5 w-auto  ">
          <h3 className="text-2xl">Categories</h3>
          <button
            className="border text-white bg-blue-800"
            onClick={handleShow}
          >
            add
          </button>
        </div>
        {<ul>{renderCategories(categories)}</ul>}
      </div>
      <NewMOdal
        handleClose={handleClose}
        show={show}
        modalTitle='Add New Category'
      >
        <input
          className="form-control mb-2"
          value={categoryName}
          placeholder="enter category name"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <select
          className="form-control"
          value={parentCategoryId}
          onChange={(e) => setParentCategoryId(e.target.value)}
        >
          <option>Select Category</option>
          {createCategoryList(categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          name="categoryImage"
          onChange={handleCategoryImage}
        />
      </NewMOdal>
    </Layout>
  );
};
export default Categories;
