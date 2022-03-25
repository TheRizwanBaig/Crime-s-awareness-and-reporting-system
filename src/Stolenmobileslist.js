import React, {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Crimes.css';
import { db } from "./firebase";

const Stolenmobileslist =() =>{

    const [state, setState]= useState("")

    const [fetchData, setFetchData] = useState([])

    const allData = () => {
        let crimes = []
        db.collection(state).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              console.log("test",doc.data())
              crimes.push(doc.data())
                
            });
            setFetchData(crimes)
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!state) {
            return;
        };
        allData();
    };
    const handleKeypress = (e) => {
    //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };


    return(
        <div className="Crimes">
            <h1>Stolen mobiles list</h1>
            <br/>
            <FormControl >
                <Card
                    component="form"
                    sx={{ p: '5px 5px', display: 'flex', alignItems: 'center', width: 270 }}
                    
                >
      
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search IMEI"
                        label="Enter IMEI"
                        onKeyPress={handleKeypress}
                        inputProps={{ minLength: 15 ,maxLength: 15 }}     
                        value={state} 
                        onChange={(e) => setState(e.target.value)}
                    />
                    <IconButton 
                        type="submit" 
                        sx={{ p: '20px' }} 
                        aria-label="search" 
                        onClick={handleSubmit} >
                        <SearchIcon />
                    </IconButton>
      
                </Card> 
            
               
                <br/> <br/>  
                
            </FormControl>
            
            <Box>
               
               {
               
                   fetchData.map( data =>{
                       return(
                                <Box sx={{width: '110%', margin: '20px auto', textAlign: 'left'}}>                         
                                <Card elevation={3} style={{padding: 20,background: "#F9F9F9"}}  > 
                                    Name: {data.name} <br/>
                                    Contact: {data.contact} <br/>
                                    Mobile's IMEI: {data.imei} <br/>
                                    Address: {data.address} <br/>
                                    Details: {data.details} <br/>
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
export default Stolenmobileslist;