import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import NativeSelect from '@mui/material/NativeSelect';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { db, storage } from "./firebase";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


const Missingperreport =() =>{

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
    const [date, setDate] = useState(null);
    const [image, setImage] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)


    const [state, setState] = useState({
        name: "",
        contact: "",
        cnic:"",
        missPerson: "",
        address: "",
        details: "",
        missDate: "",
        city: "",
    });

    const handleChange =(e) =>{
        
        // let name;
        // let value;
        // name=e.target.name 
        // name === state.image ? value= e.target.files[0] :value= e.target.value
        // setState({...state, [name]: value })
        let {name,value}= e.target;
        setState({...state, [name]: value })
        
      
    }
    const handleImage = (e) =>{
        if (e.target.files[0]){
          setImage(e.target.files[0])
    
        }
      }
    // const images = async () => {
    //     storage.ref(`/images/${image.name}`).put(image)
    //     .on(
    //         "state_changed",  () => {
  
    //             // Getting Download Link
    //             storage.ref("images").child(image.name).getDownloadURL()
    //             .then((url) => {
    //                 setState( {...state, imageUrl: url});
    //             })
    //         }
    //     );
    // };
      
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        if(!state.name || !state.contact || !state.cnic || !state.missPerson || !image  || !state.address || !state.details ||!state.missDate || !state.city) {
            notifyError()
            setIsSubmitting(false)
            return;
        };

        storage.ref(`/images/${image.name}`).put(image)
        .on("state_changed", () => {
            // Getting Download Link
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                    db.collection(state.city).add({
                        ...state, imageUrl: url
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
                      
                  });

                 
              }
          );

         
      
            setState({
            name: "",
            contact: "",
            cnic:"",
            missPerson: "",
            imageUrl: "" ,
            address: "",
            details: "",
            missDate: "",
            city: "",
          });
            setDate(null)
            setImage(null)  
    };

    console.log(image)
    console.log(state.imageUrl)

    return(
        <div className="Crimes">
            <h1>Report a Missing Person</h1>
            <form 
                onSubmit={handleSubmit}>
                <FormControl style={{width: '70%'}}>
                        <TextField 
                            variant="standard"
                            id="standard-basic" 
                            label="Name of repoter" 
                            name="name"
                            onChange= {handleChange}
                            required
                        />
                      
                    <br/>

                    <TextField
                        variant="standard"
                        id="standard-basic" 
                        label="Contact No of repoter:" 
                        type="tel"
                        name="contact"
                        value={state.contact}
                        onChange= {handleChange}
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
                        label="CNIC No of repoter:" 
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
                        label="Name of Missing Person:" 
                        name="missPerson"
                        value= {state.missPerson}
                        onChange= {handleChange}
                        required
                        autoComplete="off"

                    />
                    <br/>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload Image &nbsp;<PhotoCamera  />
                        <Input
                            type="file"
                            onChange= {handleImage}
                            hidden
                        />
                    </Button> 
                   
                    <br/>
                   
                    <TextField
                        variant="standard"
                        id="standard-multiline-static"
                        label="Address "
                        name="address"
                        value= {state.address}
                        onChange= {handleChange}
                        required
                        autoComplete="off"
                        multiline
                        rows={2}
                    />
                    <br/>
                    <TextField
                        variant="standard"
                        id="standard-multiline-static"
                        label="Details about a missing person "
                        name="details"
                        value= {state.details}
                        onChange= {handleChange}
                        required
                        autoComplete="off"
                        multiline
                        rows={3}
                    />
                    <FormHelperText>Briefly Explain</FormHelperText>
                   
                    <br/>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => 
                                <TextField
                                    variant="standard"  
                                    id="standard-basic" 
                                    label="Missing Since:" 
                                    name="missDate"
                                    value= {state.missDate=date}
                                    autoComplete="off"
                                    onChange= {handleChange}
                                    required {...props} />
                            }
                            label="Missing Date & Time"
                            value={date}
                            onChange={(newValue) => {
                                setDate(new Date(newValue).toString());
                            }}
                        />
                    </LocalizationProvider>

                </FormControl>  
                <br/>
                <br/>
                <FormControl style={{width: '70%'}}>
                   <InputLabel
                        variant="standard" 
                        name="city"
                        value= {state.city}
                        onChange= {handleChange}
                        required
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
                        <option value="Karachi.">Karachi</option>
                        <option value="Lahore.">Lahore</option>
                        <option value="Faisalabad.">Faisalabad</option>
                        <option value="Hyderabad.">Hyderabad</option>
                        <option value="Peshawar.">Peshawar</option>
                        <option value="Quetta.">Quetta</option>
                        <option value="Larkana.">Larkana</option>
                        <option value="Skardu.">Skardu</option>
                    </NativeSelect>
                    <br/>
                    <LoadingButton
                        loading= {isSubmitting}
                        loadingPosition="end"
                        className="CrimeesButton" 
                        type="submit"
                        variant="outlined" 
                        > 
                        submit 
                    </LoadingButton>
                    <br/><br/>
                </FormControl>
            </form>
            <div>
             
              
            </div>
      
        </div>

    )
}
export default Missingperreport;