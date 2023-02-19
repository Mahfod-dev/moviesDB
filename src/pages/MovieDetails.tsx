import { MovieDetail } from "../components/MovieDetails/MovieDetail"
import { useParams } from "react-router"
import { MovieErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary"


export const MovieDetails = () => {

  const {id} = useParams<{id:string}>()

  return (
    <MovieErrorBoundary><MovieDetail id={id}/></MovieErrorBoundary>
  )
}