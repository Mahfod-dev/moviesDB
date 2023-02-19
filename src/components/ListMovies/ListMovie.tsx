import { useEffect } from 'react'
import {useAsync} from '../../reducer/useAsync'
import {MoviesAPI} from '../../interfaces/moviesAPI'
import {fetchMovie} from '../../api/fetchMovies'
import { MovieDataView,MovieInfoFallback,MovieSingleView } from '../../layouts'



export const ListMovie = ({movie}:{movie:string}) => {

    const {data,error,run,status} = useAsync<MoviesAPI>()

    useEffect(() => {
      if(!movie) return 


      const abortController = new AbortController()
      const signal = abortController.signal

        run(fetchMovie(movie,{signal}))

      return ()=>{
        abortController.abort()
      }
  },[movie,run])

  switch(status){
    case 'idle':
      return <></>
    case 'pending':
      return <MovieInfoFallback name={movie}/>
    case 'rejected':
        throw error
    case 'resolved':
      return <MovieDataView movies={data}/>
    default:
      throw new Error('This should be impossible')

  }
}