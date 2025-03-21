const API_KEY = process.env.API_KEY;

export const getPopularMovies = async (req, res) => {

    try {

        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
            method: "GET",
            headers: {
                accept: `application/json`,
                Authorization: `Bearer ${API_KEY}`
            }
        });

        const jsonData = await response.json();
        const movies = jsonData.results.filter(elem => (elem.poster_path != null) && (elem.adult === false));
        
        return res.json({ error: "false", movies });

    } catch (err) {
        res.status(401);
        return res.json({ error: true, msg: err.message });
    }

}

export const getMovie = async (req, res) => {

    const { id } = req.params;

    try {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`
            }  
        });

        const data = await response.json();

        return res.json({ error: false, data });

    } catch (err) {
        res.status(401);
        return res.json({ error: true, msg: err.message });
    }

}

export const searchMovie = async (req, res) => {

    const { query } = req.query;

    try {

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`
            }
        });

        const jsonData = await response.json();
        const searchResults = jsonData.results.filter(elem =>
             (elem.poster_path != null) && (elem.adult === false) && (elem.id != 1371029));


        return res.json({ error: false, searchResults });

    } catch (err) {
        res.status(401);
        return res.json({ error: true, msg: err.message });
    }

}