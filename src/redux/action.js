import * as type from "./actionType";
import {auth,googleAuthProvider,facebookAuthProvider} from "../firebase";

const registerStart = () =>({
    type: type.REGISTER_START,
});
const registerSuccess = (user) =>({
    type: type.REGISTER_SUCCESS,
    payload: user,
});
const registerFail = (error) =>({
    type: type.REGISTER_FAIL,
    payload: error,
});


const loginStart = () =>({
    type: type.LOGIN_START,
});
const loginSuccess = (user) =>({
    type: type.LOGIN_SUCCESS,
    payload: user,
});
const loginFail = (error) =>({
    type: type.LOGIN_FAIL,
    payload: error,
});


const logoutStart = () =>({
    type: type.LOGOUT_START,
});
const logoutSuccess = () =>({
    type: type.LOGOUT_SUCCESS,
});
const logoutFail = (error) =>({
    type: type.LOGOUT_FAIL,
    payload: error,
});

export const setUser = (user) => ({
    type: type.SET_USER,
    payload: user,
})

export const clearError = () =>({
    type: type.CLEAR_ERROR,
});

const googleLoginStart = () =>({
    type: type.GOOGLE_LOGIN_START,
});
const googleLoginSuccess = (user) =>({
    type: type.GOOGLE_LOGIN_SUCCESS,
    payload: user,
});
const googleLoginFail = (error) =>({
    type: type.GOOGLE_LOGIN_FAIL,
    payload: error,
});


const facebookLoginStart = () =>({
    type: type.FACEBOOK_LOGIN_START,
});
const facebookLoginSuccess = (user) =>({
    type: type.FACEBOOK_LOGIN_SUCCESS,
    payload: user,
});
const facebookLoginFail = (error) =>({
    type: type.FACEBOOK_LOGIN_FAIL,
    payload: error,
});


export const registerInitiate = (email,password,displayName) => {
    return function (dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=> {
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        })
        .catch((error) => dispatch(registerFail(error.message)))
    };
};

export const loginInitiate = (email,password,) => {
    return function (dispatch){
        dispatch(loginStart());
        auth
        .signInWithEmailAndPassword(email,password)
        .then(({user})=> {
            
            dispatch(loginSuccess(user))
        })
        .catch((error) => dispatch(loginFail(error.message)))
    };
};

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart() );
        auth
        .signOut()
        .then((resp) =>   dispatch(logoutSuccess() ))
        .catch((error) => dispatch(logoutFail(error.message)))
    };
};

export const googleLoginInitiate = () => {
    return function (dispatch){
        dispatch(googleLoginStart());
        auth
        .signInWithPopup(googleAuthProvider)
        .then(({user})=> {
            dispatch(googleLoginSuccess(user))
        })
        .catch((error) => dispatch(googleLoginFail(error.message)))
    };
};


export const facebookLoginInitiate = () => {
    return function (dispatch){
        dispatch(facebookLoginStart());
        auth
        .signInWithPopup(facebookAuthProvider.addScope("user_birthday, email"))
        .then(({user})=> {
            dispatch(facebookLoginSuccess(user))
        })
        .catch((error) => { 
            console.log(error)
            dispatch(facebookLoginFail(error.message))
        } ) 
    };
};
