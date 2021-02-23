import React,{ useEffect, useState, Suspense } from 'react';
import { getAllGenres, deleteGenre, updateGenre } from '../../../functions/movies';
// import { Link } from 'react-router-dom';
import Loader from '../../../utils/Loader';
import OverLay from '../../../utils/OverLay';
import axios from '../../../utils/axios';
import { useRecoilValue } from 'recoil';
import { user } from '../../../utils/atom';
import * as Action from './actions/Actions'
let pageNow = 1;

const Genres = () => {
    const [genres,setGenres] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page, setPage] = useState(pageNow);
    const userData = useRecoilValue(user);

    const deleteHandler = async (id) => {
      setLoading(true);
      let res = await deleteGenre(id, userData.token);
      res.deleted && setGenres(await getAllGenres());
      alert("Genre Sudah Berhasil Dihapus Dan Tidak Dapat Dibatalka");
      setLoading(false);
    }

    const updateHandler = async(genre) => { 
      let newGenre = prompt(`Genre Sebelumnya Bernama: ${genre.genre}, Untuk Update Nama Genre Silahkan Ketikan Nama Genre Yang Baru Dibawah`);
      if(newGenre) {
        let res = await updateGenre(genre.id,newGenre,userData.token);
        alert("Genre Sudah Berhasil diUpdate");
        res.updated && setGenres(await getAllGenres());
      }
    }

    const addHandler = async(e) => {
      e.preventDefault();
      setLoading(true);
      let genre = prompt("Masukan Nama Genre");
      if(genre) {
          let res = await axios.post('/g/add-genre', {genre}, {
            headers: {
              "Authorization": `Bearer ${userData.token}`
            }
          })
          if (res.data.created === true) {
            alert("Genre Berhasil Ditambahkan")
            setGenres(await getAllGenres(page))
          } 
        }
        setLoading(false);
    }

    const loadMoreHandler = async () => {
      setPage(pageNow += 1);
    }

    useEffect(() => {
        const ac = new AbortController();
        (async function() {
            setLoading(true)
            setGenres(await getAllGenres(page));
            setLoading(false)
        })()
        return ac.abort();
    }, [page]);

    return (
        <>
          <Loader loading={loading} />
           {loading && <OverLay /> }
            <main className="main">
              <div className="container-fluid">
                <div className="row">
                  {/* main title */}
                  <div className="col-12">
                    <div className="main__title">
                      <h2>Genre</h2>
                      <a onClick={addHandler} href="!#" className="main__title-link">add item</a>
                    </div>
                  </div>
                  {/* end main title */}
                  {/* users */}
                  <div className="col-12">
                    <div className="main__table-wrap">
                      <table className="main__table">
                        <thead>
                          <tr>
                            <th>GENRE</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Suspense fallback={"Loading"}>
                                {
                                genres.map((genre,key) => (
                                    <React.Fragment key={key}>
                                    <tr className="movies">
                                        <td>
                                        <div className="main__table-text">{genre.genre}</div>
                                        </td>
                                        <td>
                                        <div className="main__table-btns">
                                            <Action.Detail path={`/catalog/${genre.id}/${genre.genre}`}/>
                                            <Action.Edit onUpdate={updateHandler} param={genre} path="#"/>
                                            <Action.Delete onDelete={deleteHandler} param={genre.id} />
                                        </div>
                                        </td>
                                    </tr>
                                    </React.Fragment>
                                ))
                            }                        
                          </Suspense>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* end users */}
                </div>
                <div className="row">
                    <div className="col-12">
                        <button onClick={loadMoreHandler} className="catalog__more" type="button">Load more</button>
                    </div>
                </div>
              </div>
            </main>
        </>
    );
}

export default Genres;
