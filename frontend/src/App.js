import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Search from "./component/Product/Search";
import Products from "./component/Product/Products";
import { useEffect, useState } from "react";
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
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import OrderList from "./component/Admin/OrderList";
import UsersList from "./component/Admin/UsersList";
import ProductReviews from "./component/Admin/ProductReviews";
import UpdateProduct from "./component/Admin/UpdateProduct";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UpdateUser from "./component/Admin/UpdateUser";
import About from "./component/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
function App() {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripePromise = loadStripe(stripeApiKey);
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
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
  }, []);
  window.addEventListener("contextmenu", (e) => e.preventDefault());

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
          <Route exact path="/About" element={<About />} />

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
                isAdmin={true}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/products"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                isAdmin={true}
              >
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/product"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                isAdmin={true}
              >
                <NewProduct />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/orders"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                isAdmin={true}
              >
                <OrderList />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/users"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                isAdmin={true}
              >
                <UsersList />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/reviews"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                isAdmin={true}
              >
                <ProductReviews />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/product/:id"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                isAdmin={true}
              >
                <UpdateProduct />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/order/:id"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                isAdmin={true}
              >
                <ProcessOrder />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/user/:id"
            element={
              <ProtectedRoute
                loading={loading}
                isAuthenticated={isAuthenticated}
                user={user}
                isAdmin={true}
              >
                <UpdateUser />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
