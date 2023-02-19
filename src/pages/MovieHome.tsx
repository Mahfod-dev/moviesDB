import { useState } from "react"
import {FormMovie} from "../components"
import { ListMovie } from "../components"
import { MovieErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary"

export const MovieHome = () => {

  const [movie,setMovie] = useState('')

function onSubmitMovie(movie:string){
setMovie(movie)
}

function handleReset(){
  setMovie('')
}



  return (
    <>
      <FormMovie onSubmitMovie={onSubmitMovie}/>
      <MovieErrorBoundary onReset={handleReset} resetKeys={[movie]}>
      <ListMovie movie={movie}/>
      </MovieErrorBoundary>
   </>
  )
}