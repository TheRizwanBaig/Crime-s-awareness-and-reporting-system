import * as type from "./actionType";

const initialState ={
    loading: false,
    currentUser: null,
    error: "",
};
const userReducer =(state = initialState, action)=>{
    switch(action.type){
        case type.REGISTER_START:
        case type.LOGIN_START:
        case type.LOGOUT_START:
        case type.GOOGLE_LOGIN_START:
        case type.FACEBOOK_LOGIN_START:
            return{
                ...state,
                loading: true
            };
        case type.LOGOUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error: "",
            };
        case type.SET_USER:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: "",
            };
        case type.REGISTER_SUCCESS:
        case type.LOGIN_SUCCESS:
        case type.GOOGLE_LOGIN_SUCCESS:
        case type.FACEBOOK_LOGIN_SUCCESS:
            return{
                ...state,
                loading: true,
                error: "",
                currentUser: action.payload,
            };
        case type.REGISTER_FAIL:
        case type.LOGIN_FAIL:
        case type.LOGOUT_FAIL:
        case type.GOOGLE_LOGIN_FAIL:
        case type.FACEBOOK_LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };   
        case type.CLEAR_ERROR:
            return {
                ...state,
                error: "",

            }
            
        default:
            return state;
        
    }
};
export default userReducer;