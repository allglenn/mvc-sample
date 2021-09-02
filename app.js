const express  = require('express');
const PORT= 3000;
const app = express();
const friendsRouter = require("./routes/fiends.router");
app.use("/friends",friendsRouter);

app.listen(PORT,() => {
    console.log("my server is running ");
})