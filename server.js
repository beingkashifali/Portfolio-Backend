require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT;
connectDB();
const contactRouter = require("./routes/contact");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://whoiskashifali.netlify.app/"],
  }),
);
app.use(express.json());
app.use("/", contactRouter);

app.listen(port, () => {
  console.log(`Application is up and running on port ${port}`);
});
