import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
