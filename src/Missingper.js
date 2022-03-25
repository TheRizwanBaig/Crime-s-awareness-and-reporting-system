import React from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ListIcon from '@material-ui/icons/List';
import './Crimes.css';

const Missingper=() =>{
    return(
        <div className="Crimes">
            <Button variant="outlined" size="large"  startIcon={<CloudUploadIcon />} component={RouterLink} to="Missingperreport">
          report a Missing person
      </Button>
      <p>OR</p>
      <Button variant="outlined" size="large" startIcon={<ListIcon />} component={RouterLink} to="Missingperlist">
         Missing person List
      </Button>
        </div>
    )
}
export default Missingper;