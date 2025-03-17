import { Router } from "express";
import { getPopularMovies } from "../controllers/index.js";

const router = Router();

router.get("/popular-movies", getPopularMovies);

export { router as mainRouter };