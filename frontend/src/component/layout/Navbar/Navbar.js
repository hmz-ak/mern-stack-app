// import React from "react";
// import { Link } from "react-router-dom";
// import { BsFillCartFill } from "react-icons/bs";
// import logo from "../../../images/logo.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineSearch } from "react-icons/ai";
import UserOptions from "./UserOptions";
// import { useState } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const [showLinks, setShowLinks] = useState(false);
//   return (
//     <nav>
//       <div className="nav-header ">
//         <div className="logo-container">
//           <img src={logo} alt="" className="logo" />
//         </div>
//         <div
//           className={showLinks ? "nav-container show-links" : "nav-container"}
//         >
//           <div id="nav-links-container" className="nav-links-container ">
//             <ul className="nav-links">
//               <li>
//                 <Link to={"/"}>Home</Link>
//               </li>
//               <li>
//                 <Link to={"/Products"}>Products</Link>
//               </li>

//               <li>
//                 <Link to={"/Contact"}>Contact</Link>
//               </li>

//               <li>
//                 <Link to={"/About"}>About</Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <Link to={"/Search"}>
//               <AiOutlineSearch
//                 style={{
// color: "black",
// fontSize: "1.5rem",
// margin: "0 10px",
// cursor: "pointer",
//                 }}
//               />
//             </Link>
//           </div>
//           <div id="cart-icon">
//             <BsFillCartFill
//               style={{
//                 color: "black",
//                 fontSize: "1.5rem",
//                 margin: "20px",
//                 cursor: "pointer",
//               }}
//             />
//           </div>
//           <div className="box1">
//             {isAuthenticated ? (
//               <UserOptions user={user} />
//             ) : (
//               <Link to={"/Login"}>
//                 <button className="btn">Login</button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="hamburger-icon">
//         <button
//           onClick={() => {
//             setShowLinks(!showLinks);
//           }}
//           id="hamburger-btn"
//           className="hamburger"
//         >
//           <GiHamburgerMenu style={{ color: "black", fontSize: "4vmax" }} />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Home", "Products", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const routeToLogin = () => {
    navigate("/Login");
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black", position: "relative" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 3, display: { xs: "none", md: "flex" } }}
          >
            Bro's Fashion
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  style={{ margin: "2rem" }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={page === "Home" ? "/" : `/${page}`}
                  >
                    <Typography sx={{ mr: 3 }} textAlign="center">
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 5, flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Bro's Fashion
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                style={{ textDecoration: "none", color: "white" }}
                to={page === "Home" ? "/" : `/${page}`}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {isAuthenticated ? (
            <UserOptions user={user} />
          ) : (
            <Button onClick={() => routeToLogin()} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
