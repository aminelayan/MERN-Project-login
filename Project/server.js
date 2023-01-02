const express = require("express");
const cors = require("cors");
const cookies = require("cookie-parser");
const port = 8000;
const app = express();
require("./server/config/mongoose.config");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookies());
app.use(express.urlencoded({extended:true}));
require("./server/routes/user.routes")(app);
require("./server/routes/polls.routes")(app);

app.listen(port, () => console.log("listining on port", port));
