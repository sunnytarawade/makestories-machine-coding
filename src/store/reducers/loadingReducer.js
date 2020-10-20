let initState = {
    isLoading : false,
}

let loadingReducer = (state = initState,action)=>{

    console.log(action)
    switch(action.type){
        case "LOADING_START":

        return {
            isLoading : true
        }

        case "LOADING_STOP":

        return {
            isLoading : false
        }

        default :

        return state
    }
}

export default loadingReducer