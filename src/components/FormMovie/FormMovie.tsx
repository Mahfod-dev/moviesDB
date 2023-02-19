import { FormEvent } from "react"
import { useForm } from "../../hooks/useForm"


export const FormMovie =({onSubmitMovie}:{onSubmitMovie:(v:string)=> void})=>{

const {movieName,onChange,onReset,handleBlur,errorMessage,displayErrorMessage,formIsValid,setTouched} = useForm()


const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
    setTouched(true)
    e.preventDefault()
    if(!formIsValid) return

    console.log(movieName)

    onSubmitMovie(movieName)
    
}

const styleInput = {
	display: 'flex',
	flexDirection:'column'
} as React.CSSProperties


return (
    <form onSubmit={onSubmit}>
        <div style={styleInput}>
        <label htmlFor="movieInput">Search a movie</label>
        <input type='text' id='movieInput' value={movieName} onChange={onChange} onBlur={handleBlur} aria-describedby={displayErrorMessage ? "error-message" : undefined} pattern="[a-z]{3,10}" required />
        </div>
        
        
        {displayErrorMessage ? (
        
        <div role="alert" id="error-message">
          {errorMessage}
        </div>
      ) : null}
      <button type="submit">Submit</button>
    
    </form>
)


}

