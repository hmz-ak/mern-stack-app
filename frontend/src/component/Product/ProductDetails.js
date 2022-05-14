import React from "react";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import ReactStars from "react-rating-stars-component";
import Loader from "../layout/Loader/Loader";
import WebFont from "webfontloader";
import ReviewCard from "./ReviewCard";
import Navbar from "../layout/Navbar/Navbar";
import { addItemsToCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    if (product.Stock === 0) {
      alert.error("Cannot Add to Cart");
      return;
    }
    dispatch(addItemsToCart(params.id, quantity));
    alert.success("Item Added To Cart");
  };

  useEffect(() => {
    // WebFont.load({
    //   google: {
    //     families: ["Roboto", "Droid Sans"],
    //   },
    // });
    dispatch(getProductDetails(params.id));
  }, [dispatch]);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 1000 ? 20 : 25,
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="ProductDetails">
            {product.images &&
              product.images.map((item, i) => (
                <div className="image-container details-container" key={i}>
                  <img
                    className="product-image"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                </div>
              ))}
            <div className="details-block details-container">
              <div className="details-block-1">
                <h2>{product.name}</h2>
                <p style={{ color: "grey" }}>{`Product #${product._id}`}</p>
              </div>
              <div className="details-block-2">
                <ReactStars {...options} />
                <span>{`(${product.numOfReviews}) reviews`}</span>
              </div>
              <div className="details-block-3">
                <h1
                  style={{ color: "red", margin: "0.5vmax 0" }}
                >{`${product.price}Rs`}</h1>
                <div className="details-block-3-1">
                  <div className="details-block-3-1-1">
                    <button
                      className="increase-btn  btn"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                    <input readOnly type="number" value={quantity} />
                    <button
                      className="decrease-btn btn"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <button
                      onClick={addToCartHandler}
                      className="add-to-cart-btn btn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="details-block-4">
                <h3>
                  Status :
                  <span className={product.stock ? "green" : "red"}>
                    {product.stock ? " In Stock" : " Out of Stock"}
                  </span>
                </h3>
              </div>
              <div className="details-block-5">
                <h2>Description</h2>
                <p style={{ margin: "1.5vmax 0" }}>{product.description}</p>
                <button className="btn">Submit a Review</button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="reviews-container">
        <h2 className="reviewsHeading heading">Reviews</h2>
        {product.reviews && product.reviews[0] ? (
          <div className="reviews">
            {product.reviews &&
              product.reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
          </div>
        ) : (
          <p className="noReviews">No Reviews Yet</p>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
