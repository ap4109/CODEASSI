import {Details} from "../actions/getData"
const initialState = {
    new: [],
    isLoading: false,

 
}
const AppState = (state = initialState, action) => {
    switch (action.type) {
       
            case Details.isLoading:
            
                return {
                    ...state,
                    isLoading:action.data
                }
                

            case Details.getDetailSuccess:{
               
                return {
                    ...state,
                    new:action.data
                }
            }
        
        default: {
            return state;
        }
    }
}
export default AppState