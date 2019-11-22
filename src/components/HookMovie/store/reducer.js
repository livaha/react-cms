export const initialState = {
    loading:true,
    movies:[],
    errorMessage:null
};

export const reducer = (state,action)=>{
    switch(action.type){
        case 'SEARCH_MOVIES_REQUEST':
            return{
                movies:[],
                loading:true,
                errorMessage:null
            };
        case 'SEARCH_MOVIES_SUCCESS':
            return{
                loading:false,
                movies:action.payload,
                errorMessage:null
            }
        case 'SEARCH_MOVIES_FAILURE':
            return{
                movies:[],
                loading:false,
                errorMessage:action.error
            };
        default:
            return state;
    }
};
