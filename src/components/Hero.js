import useMovieStore from '@/store'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Hero() {
    // const { emptyMovies } = useMovieStore();
    // const emp = emptyMovies((state) => state.emptyMovies)
    const search = (e) => {
        console.log(e)
        if(e.which == '13'){
            window.localStorage.removeItem('movies')
            window.location.href = `/search?query=${e.target.value.split(" ").join("+")}&page=1`
        }
    }
  return (
    <div
        className="hero h-96 bg-black"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://c4.wallpaperflare.com/wallpaper/576/838/565/spiderman-4k-artwork-hd-wallpaper-preview.jpg)",
          backgroundRepeat: "no-repeat!important",
          backgroundSize: "cover!important",
          backgroundPosition: "center!important",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold text-center text-white">
              Search from Millions of movies!
            </h1>
            <p className="py-6 text-center text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="form-control relative">
              <input
                type="search"
                placeholder="Search movies, TV shows, Genre, Actors"
                className="input input-bordered"
                name="search"
                onKeyDown={search}
              />
              <FontAwesomeIcon icon={faSearch} className='fas fa-search absolute right-3 top-4' />
            </div>
          </div>
        </div>
      </div>
  )
}
