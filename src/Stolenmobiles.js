import React from "react";
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ListIcon from '@material-ui/icons/List';
import './Crimes.css';

const Stolenmobiles =() =>{
    return(
        <div className="Crimes">
            <Button variant="outlined" size="large"  startIcon={<CloudUploadIcon />} component={RouterLink} to="Stolenmobilesreport">
          report a snatched mobiles
      </Button>
      <p>OR</p>
      <Button variant="outlined" size="large"  startIcon={<ListIcon />} component={RouterLink} to="Stolenmobileslist">
      Stolen Mobiles list
      </Button>
        </div>
    )
}
export default Stolenmobiles;