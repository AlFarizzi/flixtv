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

export const  searchMovie = async(title) => {
    try {
        let res = await axios.get('/m/search', {params:{title}})
        return res.data.data;        
    } catch (error) {
        throw error;
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

export const deleteMovieById = async(movie,token) => {
    try {
        if(token) {
            await deleteFileViaLink(movie.poster_link) 
            await deleteFileViaLink(movie.video_link) 
            let res = await axios.delete("/m/delete-movie", {data:{id:movie.id},
            headers : {
                "Authorization": `Bearer ${token}`
            }
        })
            return res.data.deleted;
        }
    } catch (error) {
        throw error
    }
}

// ------------------------------------------------------

export const getAllGenres = async(page) => {
    try {
        let res = await axios.get("/g/genres", {params:{page}});
        return res.data.data;
    } catch (error) {
        throw error
    }
}

export const deleteGenre = async(id,token) => {
    try {
        let res = await axios.delete("/g/delete-genre", {params: {id}, headers: {
            "Authorization": `Bearer ${token}`
        } })
        return res.data
    } catch (error) {
        throw error
    }
}

export const updateGenre = async(id,newGenre, token) => {
    try {
        let res = await axios.put('/g/update-genre', {genre:newGenre,id}, {
            headers :{
                "Authorization": `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        throw error;
    }
}

// -------------------------------------------------

export const postComment = async(c,id) => {
    try {
        let res = await axios.post('/c/comment', {name:sessionStorage.getItem("name"),comment:c,id})
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const getComments = async(page) => {
    let res = await axios.get('/c/comments');
    return res.data;
}