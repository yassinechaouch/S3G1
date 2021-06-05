import * as React from 'react';
import { AppBar } from 'react-admin';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import restProvider from 'ra-data-simple-rest'
import { makeStyles,CardActions,Button,IconButton,  Toolbar, Typography , Box, Container, Grid,CardMedia, Card,CardActionArea, Avatar} from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme)=>({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    AppBar:{
        backgroundColor:"#ddd",
      
    
    }
}));

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar className={classes.AppBar} {...props}>
            
            <Typography
                variant="h6" color="primary"
                className={classes.title}
                id="hi"
            >  Admin</Typography>
          
          <IconButton  className={classes.Book} >
              <Link to='/home'>
              <HomeIcon />
              </Link>
              </IconButton>
              <IconButton className={classes.Ann1} >
              <AnnouncementIcon  />
              </IconButton>
          <IconButton  className={classes.Ann1} >
          <Link to='/Booking'>
              <BookmarkIcon  />
              </Link>
              </IconButton>
              <IconButton  className={classes.Ann1} >
              <ContactSupportIcon  />
              </IconButton>
            
        </AppBar>
    );
};

export default MyAppBar;