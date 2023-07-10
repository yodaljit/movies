import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = (set) => ({
    // initial state
    movies: [],
    // methods for manipulating state
    addMovies: (movies) => {
      set((state) => ({
        movies: [...state.movies, movies],
      }));
    },
    // emptyMovies: () => {
    //     set((state) => ({
    //       movies: [],
    //     }))
    // }
});


const useMovieStore = create(persist(useStore, {name: 'movies'}))

export default useMovieStore;