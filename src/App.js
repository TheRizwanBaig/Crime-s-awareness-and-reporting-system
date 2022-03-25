import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Navebar from './Navebar';
import Crimes from './Crimes';
import Crimesreport from './Crimesreport';
import Crimeslist from './Crimeslist';
import Missingper from './Missingper';
import Missingperlist from './Missingperlist';
import Missingperreport from './Missingperreport';
import Stolenmobiles from './Stolenmobiles'
import Stolenmobileslist from './Stolenmobileslist';
import Stolenmobilesreport from './Stolenmobilesreport';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import React, {useState,useEffect} from "react";
import {auth} from './firebase';
import UserRoute from './UserRoute';
import {useDispatch} from "react-redux";
import {setUser} from "./redux/action";


function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser){
        dispatch(setUser(authUser));
      }
      else {
        dispatch(setUser(null));
      }
    })
  },[dispatch])

  const [user, currentUser] = useState('')

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) currentUser(user)
      else currentUser(null)
    })

  },[])
  

  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
      <Navebar  user={user} />
        <Switch>    
          
            <Route  path="/" exact component={Crimes }  />
            <UserRoute  path="/Crimesreport"  component={Crimesreport }  />
            <Route  path="/Crimeslist"  component={Crimeslist }  />
            <Route  path="/Missingper" component={Missingper}/>
            <Route  path="/Missingperlist" component={Missingperlist}/>
            <UserRoute  path="/Missingperreport" component={Missingperreport}/>
            <Route  path="/Stolenmobiles" component={Stolenmobiles}/>
            <Route  path="/Stolenmobileslist" component={Stolenmobileslist}/>
            <UserRoute  path="/Stolenmobilesreport" component={Stolenmobilesreport}/>
            <Route  path="/login" component={Login} />
            <Route  path="/signup" component={Signup}/>

        </Switch>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
