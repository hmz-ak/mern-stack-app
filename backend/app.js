const express = require("express");

const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
// Route Imports
const productRouter = require("./routes/productRoutes");
app.use("/api/v1", productRouter);
const userRouter = require("./routes/userRoute");
app.use("/api/v1", userRouter);
const orderRouter = require("./routes/orderRoutes");
app.use("/api/v1", orderRouter);
const paymentRouter = require("./routes/paymentRoutes");
app.use("/api/v1", paymentRouter);

// const loginRouter = require("./routes/userRoute");
// app.use(("/api/v1", loginRouter));

// const logoutRouter = require("./routes/userRoute");
// app.use(("api/v1", logoutRouter));

// const forgotPasswordRouter = require("./routes/userRoute");
// app.use(("api/v1", forgotPasswordRouter));

// Error Middle Ware
const errorMiddleware = require("./middleware/error");
app.use(errorMiddleware);
module.exports = app;
