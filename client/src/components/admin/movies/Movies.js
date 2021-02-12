import React,{ useState,useEffect, Suspense } from 'react';
import { getAllMovies, deleteMovieById, getMovie } from '../../../functions/movies';
import { useParams } from 'react-router-dom';
import * as Action from './actions/Actions';
import Loader from '../../../utils/Loader';
import OverLay from '../../../utils/OverLay';
const page = 1;

function Movies(props) {
  const params = useParams();
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(false);

  const deleteMovie = async(movie) => {
    setLoading(true)
    let deleted = await deleteMovieById(movie);
    if(deleted === true) alert("Data berhasil dihapus dan tidak dapat dikembalikan lagi!");
    setLoading(false);
  }

  useEffect(() => {
    let ac  = new AbortController();
    const getMovies = async() => {
        setMovies(await getAllMovies(page));
    }
    const getMoviesByGenre = async() => {
      setMovies(await getMovie(params.id,page));
    }
    params.id && params.genre ? getMoviesByGenre() : getMovies();
    return ac.abort();
  }, [params.id,params.genre]);
  // console.log(movies);

  return (
        <>
          <Loader loading={ loading } />
          { loading && <OverLay /> }
            <main className="main">
              <div className="container-fluid">
                <div className="row">
                  {/* main title */}
                  <div className="col-12">
                    <div className="main__title">
                      <h2>Catalog</h2>
                      {/* <span className="main__title-stat"> total</span> */}
                      <div className="main__title-wrap">
                        {/* search */}
                        <form action="#" className="main__title-form">
                          <input type="text" placeholder="Find movie / tv series.." />
                          <button type="button">
                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="../../../../external.html?link=http://www.w3.org/2000/svg"><circle cx="8.25998" cy="8.25995" r="7.48191" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.4637 13.8523L16.3971 16.778" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </button>
                        </form>
                        {/* end search */}
                      </div>
                    </div>
                  </div>
                  {/* end main title */}
                  {/* users */}
                  <div className="col-12">
                    <div className="main__table-wrap">
                      <table className="main__table">
                        <thead>
                          <tr>
                            <th>TITLE</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        {
                          movies.length > 0
                          ? <>
                              <tbody>
                                <Suspense fallback={"Loading....."}>
                                    {
                                      movies.map((movie,key) => (
                                          <React.Fragment key={key}>
                                            <tr className="movies">
                                              <td>
                                                <div className="main__table-text">{movie.title}</div>
                                              </td>
                                              <td>
                                                <div className="main__table-btns">
                                                  <Action.Edit path={`/edit/${movie.id}/${movie.title}`} />
                                                  <Action.Delete onDelete={deleteMovie} param={movie} />
                                                </div>
                                              </td>
                                            </tr>
                                          </React.Fragment>
                                      ))
                                    }
                                </Suspense>
                              </tbody>
                            </>
                          : <>
                            <tbody>
                                <tr>
                                    <td>
                                      <h1 style={{color:"white",textAlign:"center",marginBottom:"10px"}}>
                                        Not Items Right Here
                                      </h1>
                                    </td>
                                </tr>
                            </tbody>
                            </>
                        }
                      </table>
                    </div>
                  </div>
                  {/* end users */}
                </div>
              </div>
            </main>
        </>
    );
}

export default Movies;