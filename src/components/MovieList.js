import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faStar } from "@fortawesome/free-solid-svg-icons";
export default function MovieList({items}) {
  return (
    <div className="container mx-auto">
    <h2 className="mt-20 mb-10 font-bold text-5xl text-center">Trending Today</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5">
      {items?.map((prop) => (
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={
                "https://www.themoviedb.org/t/p/w440_and_h660_face" +
                prop.poster_path
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
            <p>{prop.overview.substring(0,100)+"..."}</p>
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
    </div>
  )
}
