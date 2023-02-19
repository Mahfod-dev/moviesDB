
export type AsyncState<DataType> = 
    |{
        status:'idle',
        data?:null,
        error?:null,
        promise?:null
    }
    |
    {
        status:'pending',
        data?:null,
        error?:null,
        promise:Promise<DataType>
    }
    |
    {
        status:'resolved',
        data:DataType,
        error:null,
        promise:null
    }
    |
    {
        status:'rejected',
        data:null,
        error:Error,
        promise:null
    }

 export type AsyncAction<DataType>=
 | {type:'reset'}
 | {type :'pending'; promise:Promise<DataType>}
 | {type:'resolved'; data:DataType ;promise:Promise<DataType>}
 | {type:'rejected';error:Error;promise:Promise<DataType>}

