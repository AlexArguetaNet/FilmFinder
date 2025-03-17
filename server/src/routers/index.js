import { Router } from "express";
import { getPopularMovies, getMovie, searchMovie } from "../controllers/index.js";

const router = Router();

router.get("/popular-movies", getPopularMovies);
router.get("/movies/:id", getMovie);
router.get("/search", searchMovie);

export { router as mainRouter };