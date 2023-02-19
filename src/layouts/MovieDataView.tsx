import {useRef} from 'react'
import { MoviesAPI,Search} from "../interfaces/moviesAPI"
import { Link } from 'react-router-dom'

type MoviesProps={
movies:MoviesAPI
}


export const MovieDataView = ({movies}:MoviesProps) => {

return (
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
      {
        movies.Search.map((movie) => {
          return (
              <MovieSingleView key={movie.imdbID} movie={movie}/>
          )
        })

      }
    </div>
  )
}
type SearchProps={
movie:Search
}


export const MovieSingleView = ({movie}:SearchProps) => {

  return (
            <div style={{margin:'0 20px'}}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} />
              <p>{movie.Year}</p>
              <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
          </div>
  )

}

export const MovieInfoFallback = ({name}:{name:string}) => {

  const initialMovie = useRef(name).current
  const fallbackMovieData:Search = {
        Title: initialMovie,
        Year: "N/A",
        imdbID: "N/A",
        Poster: "N/A",
      }

      return <MovieSingleView movie={fallbackMovieData} />
}





