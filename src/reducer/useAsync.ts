import { useCallback, useReducer } from "react";
import { movieReducer } from "./movieReducer";
import { AsyncAction,AsyncState } from "./movieProvider";


export function useAsync<DataType>(){

    const [state,dispatch] = useReducer<React.Reducer<AsyncState<DataType>,AsyncAction<DataType>>>(movieReducer,{
        status:'idle',
        data:[],
        error:null,
        
})

const {data,error,status} = state

const run = useCallback((promise:Promise<DataType>)=>{

    dispatch({type:'pending',promise})

    promise.then(
        data=>{
            dispatch({type:'resolved',data, promise})
        },
        error =>{
            dispatch({type:'rejected',error,promise})
        }
    )

},[])


return {
    error,
    status,
    data,
    run
}



}