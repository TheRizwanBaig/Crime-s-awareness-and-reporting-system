import React from "react";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import TextField from '@material-ui/core/TextField';
import InputAdornment  from '@material-ui/core/InputAdornment';
import InputLabel  from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {Link,useHistory} from 'react-router-dom';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import './Login.css';
import { facebookLoginInitiate, googleLoginInitiate,clearError, loginInitiate } from "./redux/action";

const Login= () =>{

  toast.configure()
  const notifySuccess = ()=>{ 
    // Calling toast method by passing string
    toast.success(`Login With ${currentUser.email}`, {autoClose:2050})
  }
  const notifyError =()=>{
    toast.error('Incorrect Email or Password ', {
      // Set to 15sec
      position: toast.POSITION.BOTTOM_LEFT, autoClose:1500})
  }

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const {currentUser, error} = useSelector((state) => state.user);
  const history = useHistory();
  useEffect(() => {
    if (currentUser){
      history.push("/");
      notifySuccess();
    }
  }, [currentUser])
  
  useEffect(() => {
    if (error){
      notifyError();
    }
    return () => {
      dispatch(clearError());
    }
  }, [error])

  const dispatch = useDispatch();
  
  const handleGoogleLogin=()=>{
    dispatch(googleLoginInitiate());
  };

  const handleFBlogin=()=>{
  
    dispatch(facebookLoginInitiate());
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!email || !password) {
      return;
    };
    dispatch(loginInitiate(email,password));
  };

  const handleChange=(e)=>{
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }; 

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return(
    <div className="Login" >
      <h1>Login</h1>
      <form 
        onSubmit={handleSubmit}>
        <FormControl  >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                variant="standard"
                style = {{width: 250}}
                label="Email" 
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}

              />
            </Grid>
          </Grid>
        

          <br/>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockIcon /> 
            </Grid>

            <Grid item>
              <FormControl>
                <InputLabel 
                  htmlFor="standard-adornment-password"
                  >
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={state.showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  required
                  autoComplete="off"
                  inputProps={{ minLength: 6 }}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {state.showPassword ?  <Visibility /> :<VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
           </Grid>
          </Grid> 
          <br/>
          <Button
            className="LoginButton" 
            type="submit"
            variant="outlined"
            startIcon={<VpnKeyIcon />}             
            >
            Login 
          </Button>

          <GoogleLoginButton
            onClick={handleGoogleLogin}>
          </GoogleLoginButton>

          <FacebookLoginButton 
            onClick= {handleFBlogin}>
          </FacebookLoginButton>
          <br/>
          <p >Don't have an account? <Link to="/signup" > Sign up</Link></p>
          <br/>
        </FormControl>
      </form>  

    </div>
  )
}


export default Login;