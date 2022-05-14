import React from "react";
import "./Body.css";
import Product from "./ProductCard";
import image from "../../../images/shirt3.jpg";
import { getProduct } from "../../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import MetaData from "../MetaData";
import { useAlert } from "react-alert";
import { clearErrors } from "../../../actions/productAction";

const Body = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"MERN STACK ECOMMERCE APP"} />
          <div className="body-container ">
            <h2 className="body-heading">Featured Products</h2>
            <div className="flex-container">
              {products &&
                products.map((product) => (
                  <Product product={product} key={product._id} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Body;
