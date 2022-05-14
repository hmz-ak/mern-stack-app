import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import { clearErrors, verify } from "../../actions/userAction";
import { useAlert } from "react-alert";
const VerifyUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isVerified, error, message } = useSelector(
    (state) => state.user
  );
  const alert = useAlert();
  const params = useParams();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors(error));
    }

    if (message) {
      alert.success(message);
    }
    if (isVerified) {
      navigate("/Login");
    }
    const token = params.token;
    dispatch(verify(token));
  }, [dispatch, error, isVerified]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>{isVerified ? "Account Verified" : "Verifying your Account"}</h1>
          <h2>Back to Login Page</h2>
          <Link to={"/Login"}> Login </Link>
        </div>
      )}
    </>
  );
};

export default VerifyUser;
