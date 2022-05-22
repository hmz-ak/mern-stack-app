const catchAsyncErrors = require("../middleware/catchAsyncError");

const stripe = require("stripe")(
  "sk_test_51KzfwOITz75oRBunTorwaItiC7V0wyYJdhOW5pZ1zt0rrvJK7FA9n0SGfEYTMaU7fu1V9RUEjTcPuLjxI4Ue1XtI00QF4q0UGe"
);
// console.log(process.env.CLOUDINARY_API_KEY);
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "pkr",

    metadata: {
      company: "Ecommerce",
    },
  });
  res
    .status(200)
    .json({ success: true, clientSecret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey:
      "pk_test_51KzfwOITz75oRBunX9qNweiITRjVspPvXnsyGr0VU7beCulTaX7PH4Lxt48OMYBS8WhyOD7CBS3wqgdXOc3zkG6k00Jm3ewM41",
  });
});
