import React, {useState} from 'react'
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Crimes.css';
import { db } from "./firebase";

const Missingperlist =() =>{

  const [state, setState]= useState("")
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
        <h1>Missing persons list {state}</h1>
        <Box>
        <FormControl style={{width: '60%'}}>
            <InputLabel htmlFor="age-native-helper">City</InputLabel>
            <NativeSelect
                name="city"
                type="text"
                required
                value={state}
                onChange={ (e) => setState(e.target.value) }  
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
            <br />
            <LoadingButton
                loading= {isSubmitting}
                loadingPosition="end"
                className="CrimeesButton"  
                type="submit"
                variant="outlined"
                 onClick={handleSubmit} 
            >
            Fetch 
            </LoadingButton>
            <br/><br/>
        </FormControl>
        </Box>
        <Box  >
               
               {
               
                   fetchData.map( data =>{
                       return(
                                <Box sx={{width: '90%', height:'50%' ,margin: '20px auto', textAlign: 'left'}}>                         
                               <Card elevation={3} style={{padding: 20,background: "#F9F9F9"}}  >
                               <CardActions> 
                                  <CardMedia
                                    style={{
                                        alignItem: "center",
                                        width: "auto",
                                        maxHeight: "200px",
                                        objectFit: 'contain'
                                    }}
                                    component="img"                                    
                                    image= {data.imageUrl}
                                    alt={data.missPerson}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.missPerson}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Name of repoter: {data.name} <br/>
                                            Contact No of repoter: {data.contact} <br/>
                                            Name of missing person: {data.missPerson} <br/>
                                            Address: {data.address} <br/>
                                            Details: {data.details} <br/>
                                            Missing Date & Time: {data.missDate} <br/>
                                            {/* Missing Date & Time: {(new Date(data.state.missDate)).toString()} <br/> */}
                                            city: {data.city} <br/>
                                        </Typography>
                                    </CardContent>
                                    </CardActions>
                               </Card>
                               </Box>
                                                
                       )
                   })
               }
               
           </Box>
      
        </div>

    )
}
export default Missingperlist;