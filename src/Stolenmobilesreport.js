import React, {useState} from 'react'
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

const Stolenmobilesreport =() =>{

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
    const [state, setState] = useState({
        name: "",
        contact: "",
        cnic:"",
        imei: "",
        address:"",
        details: "",
        city: "",
    });

    const handleChange =(e) =>{
        
        let {name,value}= e.target;
        setState({...state, [name]: value })
        
      
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        setIsSubmitting(true)
        if(!state.name || !state.contact || !state.cnic || !state.imei || !state.address || !state.details || !state.city) {
            notifyError()
            setIsSubmitting(false)
            return;
          };
          db.collection(state.imei).add({
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
            contact: "",
            cnic:"",
            imei: "",
            address:"",
            details: "",
            city: "",
          });  
    };


    return(
        <div className="Crimes">
            <h1>Report a Snatched Mobile</h1>
            <form onSubmit={handleSubmit}>
                <FormControl  style={{width: '66%'}}>
                    <TextField
                        variant="standard"
                        id="standard-basic"  
                        label="Full Name"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        autoComplete="off"
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
                        autoComplete="off"
                        required
                        inputProps={{ minLength: 11 ,maxLength: 11 }}
                    />
                    <br/>
                    <TextField
                        variant="standard"
                        id="standard-basic" 
                        label="CNIC:" 
                        type="tel"
                        name="cnic"
                        value={state.cnic}
                        onChange= {handleChange}
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
                        label="Mobile's IMEI :" 
                        name="imei"
                        value={state.imei}
                        onChange={handleChange}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            }
                        }}
                        required
                        autoComplete="off"
                        inputProps={{ minLength: 15 ,maxLength: 15 }}
                    />
                    <br/>
                    <TextField
                        variant="standard"
                        id="standard-basic"
                        label="Address "
                        name="address"
                        value={state.address}
                        onChange={handleChange}
                        required
                        multiline
                        rows={2}
                    />
                    <br/>
                    <TextField
                        variant="standard"
                        id="standard-basic"
                        label="Details about snatching "
                        name="details"
                        value={state.details}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        multiline
                        rows={3}
                    />
                    <FormHelperText>Briefly Explain</FormHelperText>

                </FormControl>  
                <br/>

                <FormControl style={{width: '66%'}}>
                   <InputLabel
                        variant="standard"
                        required
                        name="city"
                        value={state.city}
                        onChange={handleChange}
                        autoComplete="off"
                    >
                        City
                    </InputLabel>
                    <NativeSelect
                        variant="standard"
                        name="city"
                        value= {state.city}
                        onChange= {handleChange}
                        required
                        autoComplete="off"
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
                        type="submit"
                        variant="outlined" 
                    > 
                    submit </LoadingButton>
                    <br/><br/>
                </FormControl>  
            </form>
        </div>
    )
}
export default Stolenmobilesreport;