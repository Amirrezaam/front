import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux/category/categoryActions";
import Loader from "../../../components/Loader";

export default function Categories() {

  const { categories, loading } = useSelector(state => state.categoryState);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      if (!categories) {
        dispatch(getCategory());
      }
    }

    fetchData();

  }, []);


  return (
    <>
      {
        loading ? <Loader /> :
          categories?.map((category) => {
            return (
              <li key={category.id} className="category-item">
                <div className="category-icon">
                  <img
                    src={category.image}
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <Link to={`/advertisements/${category.id}`}>{category.name}</Link>
              </li>
            );
          })
      }
    </>
  );
}
