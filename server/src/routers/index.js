import { Router } from "express";
import { getPopularMovies, getMovie } from "../controllers/index.js";

const router = Router();

router.get("/popular-movies", getPopularMovies);
router.get("/movies/:id", getMovie);

export { router as mainRouter };