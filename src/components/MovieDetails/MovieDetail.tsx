import { useAsync } from "../../reducer/useAsync"
import { MovieDetailAPI } from "../../interfaces/movieDetails"
import { useEffect } from "react"
import {fetchDetailMovie} from '../../api/fetchMovies'
import { MovieDetailView } from "../../layouts"
import { Spinner } from "../UI"



export const MovieDetail = ({id}:{id?:string}) => {

const {data,error,run,status} = useAsync<MovieDetailAPI>()

useEffect(() => {

if(!id) return

const abortController = new AbortController()
const signal = abortController.signal

run(fetchDetailMovie(id,{signal}))

      return ()=>{
        abortController.abort()
      }

},[id,run])

switch(status){
    case 'idle':
      return <span>Submit a movie</span>
    case 'pending':
      return <Spinner/>
    case 'rejected':
        throw error
    case 'resolved':
      return <MovieDetailView movieDetails={data} />
    default:
      throw new Error('This should be impossible')

}

}