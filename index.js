const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const userRouter = require("./routes/userRoutes");
app.use("/api", userRouter);
app.get("/", (req, res) => {
  res.send("Hello from Prisma");
});
app.listen(4000, () => {
  console.log("server is runnig on port 4000");
});
