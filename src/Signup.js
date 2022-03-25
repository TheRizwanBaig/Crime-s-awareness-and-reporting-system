import React,{useEffect, useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment  from '@material-ui/core/InputAdornment';
import InputLabel  from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PasswordIcon from '@material-ui/icons/Password';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';

import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { registerInitiate,clearError } from "./redux/action";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Signup=() => {

  toast.configure()
  const notifySuccess = ()=>{ 
    // Calling toast method by passing string
    toast.success(`SignUp With ${currentUser.email}`, {autoClose:2000})
  }
  const notifyError =()=>{
    toast.error('Incorrect Email or Password ', {
      // Set to 15sec
      position: toast.POSITION.BOTTOM_LEFT, autoClose:1500})
  }
  const err =()=>{
    toast.error('Password not match ', {
      // Set to 15sec
      position: toast.POSITION.BOTTOM_LEFT, autoClose:1500})
  }

  const [state, setState] = useState({
    displayName:"",
    email:"",
    password:"",
    passwordConfirm:"",
  });

  const { currentUser,error } = useSelector((state) => state.user);

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


  const {displayName,email,password,passwordConfirm} = state;

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(password !== passwordConfirm){
      err();
      return;
    }
    dispatch(registerInitiate(email,password,displayName));
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
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} >
        <FormControl>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <PersonIcon />
            </Grid>
            <Grid item>
              <TextField 
                id="input-with-icon-grid" 
                label="Full Name"
                style = {{width: 250}}
                type="text"
                name="displayName"
                required
                value={displayName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <TextField 
                id="input-with-icon-grid" 
                label="Email"
                style = {{width: 250}}
                type="email"
                name="email"
                required
                value={email}
                onChange={handleChange}              />
            </Grid>
          </Grid>
                <br></br>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                  <PasswordIcon />
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
                 <br></br>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <PasswordIcon />
            </Grid>
            <Grid item>            
              <FormControl>
                <InputLabel 
                  htmlFor="standard-adornment-password"
                  >
                  Confirm Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={state.showPassword ? 'text' : 'password'}
                  name="passwordConfirm"
                  value={passwordConfirm}
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
          <br></br>

          <Button
            className="LoginButton" 
            type="submit"
            variant="outlined"
            startIcon={<LockIcon />}
                       >
            Sign Up 
          </Button>
          <br/><br/>
        </FormControl> 
      </form>  
    </div>
  )
}

export default Signup;