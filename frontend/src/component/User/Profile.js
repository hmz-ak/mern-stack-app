import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState("");

  const updateProfilePic = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
    //  else {
    //   setUser({ ...user, [e.target.name]: e.target.value });
    // }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/Login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <Navbar />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <div>
                <div className="overlay-image">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfilePic}
                  />
                </div>
                <div className="img-container">
                  <img src={user.avatar.url} alt={user.name} />
                </div>
              </div>
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
