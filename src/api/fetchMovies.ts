import { MoviesAPI } from "../interfaces/moviesAPI"

`https://www.omdbapi.com/?apikey=d5ccb92c&s='batman'`


  type JSONResponse = {
    data?: {
      movie: Omit<MoviesAPI, 'fetchedAt'>
    }
    errors?: Array<{message: string}>
  }



export async function fetchMovie(value:string,{signal}:{signal?:AbortSignal}):Promise<MoviesAPI>{

    const response= await fetch(`https://www.omdbapi.com/?apikey=d5ccb92c&s=${value}`, {signal})

    const data:MoviesAPI = await response.json()

    if(data.Response === 'True'){
        return data
    }else{
        return Promise.reject(new Error(`No movie with the name "${value}"`))
    }
}

export async function fetchDetailMovie(id:string,{signal}:{signal?:AbortSignal}){

  const response = await fetch(`https://www.omdbapi.com/?apikey=d5ccb92c&i=${id}`, {signal})

  const data = await response.json()

  if(data.Response === 'True'){
    return data
  }else{
    return Promise.reject(new Error(`No movie with the id "${id}"`))
  }

}