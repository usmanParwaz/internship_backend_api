const express = require("express");
const PORT = 5000;
const mongoose = require("mongoose");

const app = express();

// body parser
app.use(express.json({ extended: false }));

const userRouter = require("./routes/user.routes");
app.use("/users", userRouter);

const cvRouter = require("./routes/cv.router");
app.use("/cv", cvRouter);

const mongoUrl = `mongodb+srv://usman:12345@cluster0.rbfxelp.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
    console.log("connection failed");
  });

app.use((req, res, next) => {
  // write logic
  // change req or res objects
  // send response or end response cycle
  // pass to next middleware

  const url = req.originalUrl;
  const method = req.method;

  console.log(`Request received method -> ${method}, url -> ${url} `);

  req.instructor = "Zain";

  next();
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
