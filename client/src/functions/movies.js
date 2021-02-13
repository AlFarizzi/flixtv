import axios from '../utils/axios';
import {storage} from '../utils/firebase';

export const getAllMovies = async(page) => {
    try {
        let res = await axios.get('/m/movies', {params:{page}});
        return res.data.data;
    } catch (error) {
        throw error
    }
}

export const getMovieGenres = async() => {
    let genres = [];
    try {
        let res = await axios.get("/g/add-movie-genres");
        res.data.data.forEach(genre => {
            genres.push({value:genre.id, label:genre.genre})
        });
        return genres;
    } catch (error) {
        throw error
    }
}

export const getMovie = async (genreIds,page) => {
    try {
        let res = await axios.post('/m/movie-genre', {id:genreIds,page});
        return res.data.data;
    } catch (error) {
        throw error
    }
}

export const getMovieByTitle = async (id) => {
    try {
        let res = await axios.get("/m/movie-detail", {params: {id}})
        return res.data.data;
    } catch (error) {
        throw error;
    }
}

const deleteFileViaLink = (link) => {
    storage.refFromURL(link).delete()
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const deleteMovieById = async(movie) => {
    try {
        await deleteFileViaLink(movie.poster_link) 
        await deleteFileViaLink(movie.video_link) 
        let res = await axios.delete("/m/delete-movie", {data:{id:movie.id}})
        return res.data.deleted;
    } catch (error) {
        throw error
    }
}



export const getAllGenres = async(page) => {
    try {
        let res = await axios.get("/g/genres", {params:{page}});
        return res.data.data;
    } catch (error) {
        throw error
    }
}

export const deleteGenre = async(id) => {
    try {
        let res = await axios.delete("/g/delete-genre", {params: {id} })
        return res.data
    } catch (error) {
        throw error
    }
}

export const updateGenre = async(id,newGenre) => {
    try {
        let res = await axios.put('/g/update-genre', {genre:newGenre,id});
        return res.data;
    } catch (error) {
        throw error;
    }
}