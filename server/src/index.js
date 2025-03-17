import express from "express"
import cors from "cors"
import "dotenv/config"
import { mainRouter } from "./routers/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", mainRouter);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});