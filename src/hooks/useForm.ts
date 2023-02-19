import {ChangeEvent, useState} from 'react'


export const useForm = ()=>{


    const [movieName,setMovieName] = useState('')
    const [touched,setTouched] = useState(false)



const movieNameLowercase = movieName === movieName.toLowerCase()
const movieNameIsLongEnough = movieName.length >= 3

const formIsValid = movieNameLowercase && movieNameIsLongEnough

const displayErrorMessage = touched && !formIsValid

let errorMessage = null

if(!movieNameLowercase){
errorMessage = 'Movie must be to lowercase'
}else if(!movieNameIsLongEnough){
 errorMessage = 'Movie must be a leaset 3 characters long'   
}


const onChange =(e:ChangeEvent<HTMLInputElement>)=>{

setMovieName(e.currentTarget.value)

}

const onReset = ()=>{
    setMovieName('')
}

const handleBlur = ()=>{
    setTouched(true)
}


return {movieName,onChange,onReset,displayErrorMessage,formIsValid,setTouched,errorMessage,handleBlur}

}