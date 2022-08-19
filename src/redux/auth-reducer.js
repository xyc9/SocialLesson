const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false

}

let AuthReducer = (state = initialState,action) => {
    switch (action.type){
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth:true
            };
        default:
            return state;
    }
}

export let setAuthUserData = (id,email,login) =>{
    return({type: SET_USER_DATA, data:{id,email,login} })
}


export default AuthReducer;