import { AsyncAction,AsyncState } from './movieProvider';

export function movieReducer<DataType>(state: AsyncState<DataType>, action: AsyncAction<DataType>):AsyncState<DataType>{

    switch (action.type) {
      case 'pending':{
            return {
                  status:'pending',
                  data:null,
                  error:null,
                  promise:action.promise
            }
      }
      case 'resolved':{
            if(action.promise !== state.promise) return state
            return {
                  status:'resolved',
                  data:action.data,
                  error:null,
                  promise:null
            }
      }
      case 'rejected':{
            if(action.promise !== state.promise) return state
            return {
                  status:'rejected',
                  data:null,
                  error:action.error,
                  promise:null
            }
      }

      default:{
             throw new Error(`Unhandled action type: ${action.type}`)
      }




    }                         
};