import React from 'react'
import { makeStyles,CardActions,Button,IconButton,  Toolbar, Typography , Box, Container, Grid,CardMedia, Card,CardActionArea, Avatar, AppBar} from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {Link} from 'react-router-dom'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './Styles/Navbar.css'
import Logo from '../Assets/logoiss.jpg'
import BG from '../Assets/Background.jpg'

const useStyles = makeStyles((theme) => ({
    root1:{
        
    },
    root:{
     
       backgroundImage:`url(${process.env.PUBLIC_URL + BG})`,
      backgroundColor:" linear-gradient(#000000,#3d3d3d,#848484,#bbbbbb,#ffffff)",
       backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        height: '100vh'
    },
    
appbar: {
    background:'none',
},
appbarWrapper:{
width:'80%',
margin:"0 auto",
},
appbarTitle:{
flexGrow: '1'
},
navCul:{
display:'block'
},
icon:{
    color:'rgba(249, 245, 255, 1)',
    fontSize:"2rem"
},
colorText:{
    color: '#000000'
},
container:{
    
    display:'flex',
    justifyContent : "center",
    alignItems : 'center',
    paddingTop:'300px'
},
title:{
    color:'#fff',
    fontSize:'3rem',
    fontWeight: 'bold'
    },
 goDown:{
     color: "#ffb13d",
     fontSize:"4rem"
 }
 /*   AppBar:{
        backgroundColor:" rgba(40, 38, 44, 1)",
        margin:theme.spacing(0),
       
      
    },
    bod:{
        margin: theme.spacing(0)
       
    },
    img:{
      
       width:"30px",
       height:"30px"
    },
    title: {
        fontWeight:"600",
        color:'rgba(249, 245, 255, 1);',
        
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    
    Book:{
        marginLeft:" 1000px",
    },
    link:{
        
    },
    icolor:{
color:" rgba(249, 245, 255, 1);"
    },
    Ann1:{
        color:"rgba(212, 194, 252, 1);",
marginLeft:"10px"
    }*/
  }));

function NavBar(props) {

   
    const classes = useStyles();
    return (
  
            <div className={classes.roo1}>
        <div className={classes.root} id="header">
               <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
             
                <h1 className={classes.appbarTitle}>DoorLock <span className={classes.colorText}> Project</span></h1>

                <ul >
                <Link to='/home'>
         <li><a href="#home" >Home</a></li>
         </Link>
         <Link to='/Booking' className="link">

         <li><a href="#news" >Booking</a></li>
         </Link>
         <li><a href="#contact" >Contact Us</a></li>
         <Link to='/Admin'>
         <li><a href="#contact" >Sign In </a></li>
         </Link>
  
</ul>
                
                 </Toolbar>
            </AppBar>
            
            
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Welcome to our <br/>  <span className={classes.colorText}>  ISS Project</span> 
                </h1>
                <IconButton>
                    
                    </IconButton>
            </div>
            
    </div> 
   
      {    /*       <AppBar className={classes.AppBar} {...props}  position="relative" width="100%">
      <Toolbar>
      <IconButton  className={classes.logo} >
        <img className={classes.img} src={Logo} alt="" />
      </IconButton>
          <Typography variant="h6" color="primary" className='title' className={classes.title}>
           MakerSpace
          </Typography>
          
          <IconButton  className={classes.Book} >
              <Link to='/home'>
              <HomeIcon className={classes.icolor} />
              </Link>
              </IconButton>
              <IconButton className={classes.Ann1} >
              <AnnouncementIcon className={classes.icolor} />
              </IconButton>
          <IconButton  className={classes.Ann1} >
          <Link to='/Booking' className="link">
              <BookmarkIcon className={classes.icolor}  />
              </Link>
              </IconButton>
              <IconButton  className={classes.Ann1} >
              <ContactSupportIcon className={classes.icolor} />
              </IconButton>
              <IconButton className={classes.Ann1}>
             <Link to='/Admin'>
                 <SupervisorAccountIcon className={classes.icolor}/>
                 </Link> 
             </IconButton>
              
        </Toolbar> 
    </AppBar> */}
     
</div>
</div>
    )
}

export default NavBar
