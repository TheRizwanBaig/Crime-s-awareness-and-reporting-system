import React, {useState} from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import LoadingButton from '@mui/lab/LoadingButton';
import './Crimes.css';
import { db } from "./firebase";
const Crimeslist =() =>{

    const [state, setstate]= useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [fetchData, setFetchData] = useState([])

    const allData = () => {
        let crimes = []
        db.collection(state).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                console.log("test",doc.data())
                crimes.push(doc.data())
                
            });
            setFetchData(crimes)
            setIsSubmitting(false)
        });
    }
    console.log(fetchData)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSubmitting(true)
        if(!state) {
          return;
        };
       allData();
    };
    
    
    return(
        <div className="Crimes">
            <h1>Crimes list {state} </h1>

            <FormControl style={{width: '110%'}}>
                <InputLabel htmlFor="age-native-helper">City</InputLabel>
                <NativeSelect
                    name="city"
                    type="text"
                    required
                    value={state}
                    onChange={ (e) => setstate(e.target.value) }  
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
                    onClick={handleSubmit} 
                >
                Fetch </LoadingButton>
                <br/><br/>

            </FormControl> 

            <Box>
               
                {
                
                    fetchData.map( data =>{
                        return(
                                 <Box sx={{width: '120%', margin: '20px auto', textAlign: 'left'}}>                         
                                 <Card elevation={3} style={{padding: 20,background: "#F9F9F9"}}  > 
                                    Name: {data.name} <br/>
                                    Address: {data.address} <br/>
                                    Details: {data.crime} <br/>
                                    city: {data.city} <br/>
                       
                                </Card>
                                </Box>                 
                        )
                    })
                }

            </Box>
        </div>
    )

}
export default Crimeslist;