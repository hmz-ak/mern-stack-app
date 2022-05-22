import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Search from "./component/Product/Search";
import Products from "./component/Product/Products";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import Loader from "./component/layout/Loader/Loader";
import LoginSignUp from "./component/User/LoginSignUp";
import { loadUser } from "./actions/userAction";
import store from "./store";
import Profile from "./component/User/Profile";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import VerifyUser from "./component/User/VerifyUser";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch } from "react-redux";
import { getStripeApiKey } from "./actions/cartAction";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";

function App() {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  // const { stripeApiKey } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const stripePromise = loadStripe(
    "pk_test_51KzfwOITz75oRBunX9qNweiITRjVspPvXnsyGr0VU7beCulTaX7PH4Lxt48OMYBS8WhyOD7CBS3wqgdXOc3zkG6k00Jm3ewM41"
  );
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    console.log(data.clientSecret);
    setClientSecret(data.clientSecret);
    setStripeApiKey(data.stripeApiKey);
    console.log(data.stripeApiKey);
  }

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
    // dispatch(getStripeApiKey());
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/process/payment"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <Elements options={options} stripe={stripePromise}>
                  <Payment stripeApiKey={stripeApiKey} />
                </Elements>
              </ProtectedRoute>
            }
          />

          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />

          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/Login" element={<LoginSignUp />} />
          <Route
            exact
            path="/account"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/me/update"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/password/update"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <UpdatePassword />
              </ProtectedRoute>
            }
          />
          <Route exact path="/password/forgot" element={<ForgotPassword />} />
          <Route
            exact
            path="/password/reset/:token"
            element={<ResetPassword />}
          />
          <Route exact path="/verify/:token" element={<VerifyUser />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/shipping"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <Shipping />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/order/confirm"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <ConfirmOrder />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/order/success"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <OrderSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/orders"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <MyOrders />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/order/:id"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <OrderDetails />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
