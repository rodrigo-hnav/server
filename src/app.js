import express from 'express'
import router from './routes/postRoutes.js'
import cors  from "cors";
import  {PORT}  from "../config.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router)

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
