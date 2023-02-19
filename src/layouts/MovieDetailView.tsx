import {Link} from 'react-router-dom'


type MovieDetailProps={
movieDetails:{
  Title:string
  Year:string
  Rated:string
  Released:string
  Runtime:string
  Genre:string
  Poster:string
}
}


export const MovieDetailView = ({movieDetails}:MovieDetailProps) => {

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <h2>{movieDetails.Year}</h2>
      <h3>{movieDetails.Rated}</h3>
      <h4>{movieDetails.Released}</h4>
      <h5>{movieDetails.Runtime}</h5>
      <h6>{movieDetails.Genre}</h6>
      <img src={movieDetails.Poster} alt={movieDetails.Title}/>

    <Link to='/'>Back to Home</Link>

    </div>
  )
}