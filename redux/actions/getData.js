import {BASE_URL} from "../../src/constant/api"
import axios from 'axios'

export const Details ={
    isLoading:"isLoading/Deatails",
    getDetailSuccess:"getDetailSuccess/Details"
}

export const isLoading = (data) => ({
    type: Details.isLoading,
    data
})
export const getDetailSuccess=(data)=>({
     type:Details.getDetailSuccess,
     data
})

export function getDetail(){
    return(dispatch,getState)=>{
        dispatch(isLoading(true));
        axios.get(BASE_URL).then((res)=>{
          
            dispatch(getDetailSuccess([...res.data]))
            dispatch(isLoading(false))
        }).catch((err)=>{
            console.log("ERROR",err)
            dispatch(isLoading(false));
        })
    }
}