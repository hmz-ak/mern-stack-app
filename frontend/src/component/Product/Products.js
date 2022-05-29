import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../layout/Body/ProductCard";
import { useParams } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Navbar from "../layout/Navbar/Navbar";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { Rating } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Typography } from "@material-ui/core";

const categories = [
  "Casual Shirt",
  "Formal Shirt",
  "T-shirt",
  "Trousers",
  "Track Suit",
  "Boxers",
];

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 10000000]);
  const [category, setCategory] = useState("");

  const [rating, setrating] = useState(0);
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const params = useParams();
  const keyword = params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (e, newPrice) => {
    console.log(e);
    console.log(newPrice);
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, rating));
  }, [dispatch, keyword, currentPage, price, category, rating]);

  return (
    <Fragment>
      <MetaData title="PRODUCTS -- ECOMMERCE" />
      <Navbar />
      <h2 className="productsHeading">Products</h2>
      <div className="filterBox">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={2000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Rating</Typography>

              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newRating) => {
                  console.log(event.target.value);
                  setrating(newRating);
                }}
                defaultValue={0}
                min={0}
                max={5}
              />
            </fieldset>
          </AccordionDetails>
        </Accordion>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="products productsBox">
          {products.length ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <h2>No Products Found</h2>
          )}
        </div>
      )}

      {resultPerPage < count && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Products;
