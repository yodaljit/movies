import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faStar } from "@fortawesome/free-solid-svg-icons";
import useMovieStore from "@/store";
import { useRouter } from "next/router";

export default function SearchList({ items, query, page, total }) {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(parseInt(page));
  const { movies } = useMovieStore((state) => ({ movies: state.movies }));
  const router = useRouter();

  const addMovies = useMovieStore((state) => state.addMovies);
  useEffect(() => {
    if (items != null) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const moviesToDisplay = items?.slice(startIndex, endIndex);
      moviesToDisplay.map((prop) => {
        addMovies(prop);
      });
      router.push(`/search?query=${query}&page=${currentPage}`, undefined, {
        shallow: true,
      });
    }
  }, [currentPage]);

  return (
    <div className="container mx-auto">
      <h2 className="mt-20 mb-10 font-bold text-5xl text-center">
        Search Results for {query}
      </h2>
      {items != null ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5">
          {movies?.map((prop) => (
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={
                    prop.poster_path
                      ? "https://www.themoviedb.org/t/p/w440_and_h660_face" +
                        prop.poster_path
                      : "/soon.png"
                  }
                  width={440}
                  height={660}
                  alt={prop.original_title ?? prop.original_name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {prop.title ?? prop.name}
                  <div
                    className={
                      prop.vote_average < 7
                        ? "badge badge-warning"
                        : "badge badge-success"
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fas fa-star mr-1"
                    ></FontAwesomeIcon>
                    {parseFloat(prop.vote_average).toFixed(1)}
                  </div>
                </h2>
                <p>{prop?.overview?.substring(0, 100) + "..."}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="fas fa-calender mr-1"
                    ></FontAwesomeIcon>
                    {prop.release_date ?? prop.first_air_date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl md:w-4/5 w-full mx-auto font-medium text-red-600 my-20">
          No results have been found for the searched query.
        </h2>
      )}
      <div className="w-full flex justify-center items-center">
        {items != null && (
          <>
            {currentPage < total ? (
              <button
                className="btn btn-neutral my-20 mx-auto text-center"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Load More
              </button>
            ) : (
              <p className="text-success my-20">You've reached the end</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
