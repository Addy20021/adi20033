const express = require ("express");
const app = express();
const cors = require("cors");
const bookRoutes = require("./routes/booksRoutes");
require("./connection/conn");
app.use(cors());
app.use(express.json());
app.use("/api/v1",bookRoutes);

app.listen(1000, ()=>{
    console.log("server started succesfuly");
});