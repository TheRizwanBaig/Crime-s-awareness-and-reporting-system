import React,{useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import "./Crimes.css";
const Redirect = () => {
    const [count, setCount] = useState(5);
    const [progress, setProgress] = useState(0);

    const history = useHistory();
    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 480);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    

    useEffect(()=>{
        const interval = setInterval (() => {
            setCount((currentCount) => --currentCount);
        },1000)

        count === 0 && history.push("/login");
        return ()=> clearInterval(interval);
    },[count, history])
    return (
        <div className="Crimes">
            <h3>You are not an authorized person, you have to login first </h3>
            <CircularProgress variant="determinate" value={progress} />
        </div>
    )
}

export default Redirect
