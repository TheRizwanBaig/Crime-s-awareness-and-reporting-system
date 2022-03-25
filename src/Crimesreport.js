import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import NativeSelect from '@mui/material/NativeSelect';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { db } from "./firebase";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Crimesreport =() => {

  toast.configure()
  const notifySuccess = ()=>{ 
    // Calling toast method by passing string
    toast.success("reported success", {autoClose:2050})
  }
  const notifyError =()=>{
    toast.error('fill the data first', {
      // Set to 15sec
      position: toast.POSITION.BOTTOM_LEFT, autoClose:2050})
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [state, setState]= useState({
        name: "",
        contact:"",
        cnic:"",
        address: "",
        crime:"",
        city:"",
    
  })
          
  const handleChange=(e)=>{
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }; 

  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsSubmitting(true)
    if(!state.name || !state.contact || !state.cnic || !state.address || !state.crime || !state.city) {
      notifyError()
      setIsSubmitting(false)
      return;
    };
    db.collection(state.city).add({
      ...state
    })
    .then((docRef) => {
      notifySuccess()
    })
    .catch((e) => {
      alert(e.message);
    })
    .finally(() => {
      setIsSubmitting(false)
    });

    setState({
      name: "",
      contact:"",
      cnic:"",
      address: "",
      crime:"",
      city:"",

    });
  }

  return(

    <div className="Crimes">
      <h1>Report a Crime </h1>
      <form 
        onSubmit={handleSubmit}>
        <FormControl  style={{width: '111%'}}>
          <TextField 
            variant="standard"
            id="standard-basic" 
            label="Full name" 
            name="name"
            type="text"
            value={state.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <br/>

          <TextField 
            variant="standard"
            id="standard-basic"
            label="Contact No:"
            name="contact"
            value={state.contact}
            onChange={handleChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
              }
            }}
            required
            inputProps={{ minLength: 11 ,maxLength: 11  }}
            autoComplete="off" 
          />

          <br/>
          <TextField 
            variant="standard"
            id="standard-basic"
            label="CNIC No:"
            name="cnic"
            value={state.cnic}
            onChange={handleChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
              }
            }}
            required
            inputProps={{ minLength: 13 ,maxLength: 13  }}
            autoComplete="off" 
          />

          <br/>

          <TextField
            variant="standard"
            id="standard-basic"
            label="Address"
            multiline
            rows={2}
            name="address"
            type="text"
            value={state.address}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <br/>

          <TextField
            variant="standard"
            id="standard-basic"
            label="Details about a crime"
            multiline
            rows={3}
            name="crime"
            type="text"
            value={state.crime}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <FormHelperText>Briefly Explain</FormHelperText>
        </FormControl> 

        <br/>
        
        <FormControl style={{width: '111%'}}>
          <InputLabel 
            variant="standard"
            required
            name="city"
            type="text"
            value={state.city}
            autoComplete="off"
            onChange={handleChange}
          >
            City
          </InputLabel>

          <NativeSelect
            variant="standard"
            name="city"
            type="text"
            required
            value={state.city}
            onChange={handleChange}            
          >
            <option aria-label="None" value="" />
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Faisalabad">Faisalabad</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Quetta">Quetta</option>
            <option value="Larkana">Larkana</option>
            <option value="	Skardu">Skardu</option>
                        
          </NativeSelect>
        
          <br />
        
          <LoadingButton
            loading= {isSubmitting}
            loadingPosition="end"
            className="CrimeesButton" 
            variant="outlined"
            type="submit"
          >
            submit 
          </LoadingButton>
          <br/>
          <br/>
        </FormControl>
     
  
      </form>   
    </div>
  )
}
export default Crimesreport;