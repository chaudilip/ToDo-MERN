import { app } from "./app.js";
import { connectDB } from "./data/database.js";

//Database connection
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`listening on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
  });