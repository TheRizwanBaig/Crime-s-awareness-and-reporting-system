import React from 'react';
import './Navebar.css';
import { Link as RouterLink } from 'react-router-dom';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Button from '@mui/material/Button';
import {useDispatch,useSelector} from "react-redux";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {BiLogIn} from '@react-icons/all-files/bi/BiLogIn';
import {BiLogOut} from '@react-icons/all-files/bi/BiLogOut';
import { logoutInitiate } from './redux/action';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';


const drawerWidth = 230;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
        padding: theme.spacing(0),
        transition: theme.transitions.create( {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})  
(({ theme, open }) => 
({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
            position: 'sticky',
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



const Navebar = ({user}) =>  {

    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleAuth =() =>{
        if(currentUser){
            dispatch(logoutInitiate());
        }
    }

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return(

        <div className="Navebar">
        
            <Box  
                style={{
                    backgroundColor:'#F9F9F9',
                    height: '64px',
                    marginBottom: '30px',

                }} >
                <CssBaseline />
                <AppBar 
                    elevation={3} 
                    position= 'sticky'
                    open={open} 
                    sx={{ 
                        bgcolor: "#F9F9F9",
                        }}>
                    <Toolbar >
                        <IconButton
                            size="large"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon  size="large"/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button
                                style={{
                                    color: "black", 
                                    fontWeight: "bolder"}}
                                size="large"
                                className='Button'
                                component={RouterLink} to="/" >
                                <HomeSharpIcon />Home
                            </Button>
      
                            {
                                user?
                                <>
           
                                    <Button
                                        style={{color: "black", fontWeight: "bolder"}}
                                        size="large"
                                        className='right'
                                        onClick={handleAuth} 
                                    >
                                        Logout<BiLogOut size="27px" />

                                    </Button>
                                </>
                                :
                                <Button
                                    style={{color: "black", fontWeight: "bolder"}}
                                    size="large"
                                    className="right" 
                                    component={RouterLink} to="Login" >
                                    Login<BiLogIn size="27px"/>
                                </Button>
                            }
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    PaperProps={{
                        sx: {
                            boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)' ,
                            backgroundColor: "#F9F9F9",
                        }
                    }}
                    sx={{
                        
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open} >

                    <DrawerHeader>
                        <IconButton size="large" onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />

                    <List>
                        <Button
                            style={{
                                    color: "black", 
                                    fontWeight: "bolder"}}
                            className='Button' 
                            component={RouterLink} to="Crimeslist">
                            <FormatListNumberedIcon />Crimes list
                        </Button>
                        <Button
                            style={{
                                    color: "black", 
                                    fontWeight: "bolder"}}
                            className='Button'  
                            component={RouterLink} to="Missingperlist">
                            <FormatListNumberedIcon />Missing persons List
                        </Button>
      
                        <Button
                            style={{
                                    color: "black", 
                                    fontWeight: "bolder"}}
                            className='Button'  
                            component={RouterLink} to="Stolenmobileslist">
                            <FormatListNumberedIcon />Snatched Mobiles list
                        </Button>
        
                    </List>
                    <Divider />
                    <List>
                        <Button
                            style={{
                                    color: "black", 
                                    fontWeight: "bolder"}}
                            className='Button'
                            component={RouterLink} to="Crimesreport" >
                            <ReportGmailerrorredIcon />report a Crime
                        </Button>
                        <Button
                            style={{
                                    color: "black", 
                                    fontWeight: "bolder"}}
                            className='Button'  
                            component={RouterLink} to="Missingperreport">
                            <ReportGmailerrorredIcon />report a Missing person
                        </Button>
                        <Button
                            style={{
                                    color: "black", 
                                    fontWeight: "bolder"}}
                            className='Button' 
                            component={RouterLink} to="Stolenmobilesreport">
                            <ReportGmailerrorredIcon />report a snatched mobile
                        </Button>
                    </List>
                    <Divider />

                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
        
                </Main>
            </Box>
            
        </div>

    )

}
export default Navebar;