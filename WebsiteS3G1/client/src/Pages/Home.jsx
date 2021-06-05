import React from 'react'
import IM1 from '../Assets/k1.jpg'
import IM2 from '../Assets/nbag.jpg'
import IM3 from '../Assets/front.jpg'
import IM4 from '../Assets/raspberry.jpg'
import IM6 from '../Assets/DB.jpg'
import P1 from '../Assets/p1.jpg'
import P2 from '../Assets/p2.jpg'
import P3 from '../Assets/p3.jpg'
import P4 from '../Assets/p4.jpg'
import P5 from '../Assets/p5.jpg'
import P6 from '../Assets/p6.jpg'

import IM5 from '../Assets/database.jpg'
import { makeStyles,CardActions,Button,IconButton, AppBar,CardContent, Toolbar, Typography , Box, Container, Grid,CardMedia, Card,CardActionArea, Avatar} from '@material-ui/core';
import { ThemeProvider} from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {Link} from 'react-router-dom'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import Developer from '../components/Developer';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Admin, Resource } from 'react-admin'
import MyLayout from '../components/MyLayout'
import restProvider from 'ra-data-simple-rest'
import Mylayouts from '../components/Mylayouts';
import MyAppBar from '../MyAppBar';
import Developer1 from '../components/Developer1'
import Developer2 from '../components/Developer2'
// backgroundColor:" linear-gradient(rgba(40, 38, 44, 1) ,rgba(212, 194, 252, 1),rgba(249, 245, 255, 1),rgba(20, 36, 138, 1), rgba(66, 129, 164, 1))",
//#070300, #b77a37,#d9a069,#ebd5bd,#fafaf8
//#000000,#3d3d3d,#848484,#bbbbbb,#ffffff
//#040404,#4e504d,#8f979a,#fffffd,#441014
//#fafaf8,#ebd5bd,#d9a069,#b77a37,#070300,
//#ffffff,#bbbbbb,#848484,#3d3d3d,#000000
const useStyles = makeStyles((theme) => ({
  root2:{
   // backgroundImage:" linear-gradient(#ffffff,#bbbbbb,#848484,#3d3d3d,#000000)",
  },
    AppBar:{
        backgroundColor:" rgba(40, 38, 44, 1)"
    },
    Grid:{
        border: `1px solid ${theme.palette.secondary[400]}`,
        padding: theme.spacing(2),
        borderRadius: "2px",
        maxWidth: 300
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    hero:{
       backgroundImage: `linear-gradient(rgba(249, 245, 255, 1),rgba(249, 245, 255, 1)), url(${process.env.PUBLIC_URL + IM2})`,
   //   backgroundColor:'rgba(249, 245, 255, 1);',
       height:'500px', 
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position:"relative", 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#fff",
        fontSize:"4rem",
        [theme.breakpoints.down('sm')] :{
            height: 300,
            fontSize:"3em"
        }
    
    },
    blogsContainer:{
        paddingTop: theme.spacing(7)
    },
    div1:{
    //  backgroundColor:" rgba(40, 38, 44, 1) ",

    },
    div2:{
     backgroundColor:"rgba(40, 38, 44, 1)",
    },
    blogTitle:{
      paddingLeft: theme.spacing(65),
        fontWeight: 800,
        paddingBottom : theme.spacing(7)
    },
    blogTitle1:{
      paddingLeft: theme.spacing(65),
        fontWeight: 800,
        paddingBottom : theme.spacing(7),
        color:"#fff"
    },
    card: {
        maxWidth:'100%'
    },
    media:{
        height:240
    },
    cardActions:{
        display:'flex',
        margin:"0 10px",
        justifyContent:"space-between"
    },
    author:{
        display:'flex'
    },
    paginationContainer:{
        display:'flex',
        justifyContent:"center"
    },
    Book:{
        marginLeft:" 1000px",
    },
    Ann1:{
marginLeft:"10px"
    }
  }));

function Home() {
    const classes = useStyles();
    return (
      <div className={classes.root2}>
        <ThemeProvider>
        <NavBar/>
        {  /*    <Box className={classes.hero}>
          <Box>React Blog</Box>
      </Box>
     <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <DeleteButton undoable={false} />
    </Toolbar>

      */  }   
      <div className={classes.div1}> 
    <Container maxWidth="lg" className={classes.blogsContainer}>
      
    <Typography variant="h4" className={classes.blogTitle} >
           Our Work
          </Typography>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={IM3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Website
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate suscipit, vitae minus officia eaque harum voluptates accusamus, aut facere perspiciatis labore sunt nostrum cupiditate laboriosam exercitationem et? Nam, ducimus perferendis?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
       <Box className={classes.author}>
       <AvatarGroup max={4}>
        <Avatar src={P1}/>
        <Avatar src={P2}/>
        <Avatar src={P3}/>
        </AvatarGroup>
        <Box ml={2}>
        <Typography variant="subtitle2" component="p">
            Mahmoud/Amine/Mohamed
          </Typography>
          <Typography variant="subtitle2" color='textSecondary' component="p">
            May 14, 2020
          </Typography>
        </Box>
        
       </Box>
       <Box>
        <BookmarkBorderIcon />
       </Box>
      </CardActions>
    </Card>
    
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={IM5}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Raspberry Pi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate suscipit, vitae minus officia eaque harum voluptates accusamus, aut facere perspiciatis labore sunt nostrum cupiditate laboriosam exercitationem et? Nam, ducimus perferendis?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
       <Box className={classes.author}>
         <AvatarGroup>
        <Avatar src={P5}/>
        <Avatar src={P4}/>
        </AvatarGroup>

        <Box ml={2}>
        <Typography variant="subtitle2" component="p">
            Yahia/Alia
          </Typography>
          <Typography variant="subtitle2" color='textSecondary' component="p">
            May 14, 2020
          </Typography>
        </Box>
        
       </Box>
       <Box>
        <BookmarkBorderIcon />
       </Box>
      </CardActions>
    </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={IM6}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Database
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate suscipit, vitae minus officia eaque harum voluptates accusamus, aut facere perspiciatis labore sunt nostrum cupiditate laboriosam exercitationem et? Nam, ducimus perferendis?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
       <Box className={classes.author}>
         <AvatarGroup>
        <Avatar src={P1}/>
        <Avatar src={P6}/>
        </AvatarGroup>
        <Box ml={2}>
        <Typography variant="subtitle2" component="p">
            Wael/Mahmoud
          </Typography>
          <Typography variant="subtitle2" color='textSecondary' component="p">
            May 14, 2020
          </Typography>
        </Box>
        
       </Box>
       <Box>
        <BookmarkBorderIcon />
       </Box>
      </CardActions>
    </Card>
              </Grid>
          </Grid>
          <Box my={4} className={classes.paginationContainer}>
       
        </Box>
    </Container>
    </div>
    <div className={classes.div2}>
    <Container maxWidth="lg" className={classes.blogsContainer}>
    <Typography variant="h4" className={classes.blogTitle1} >
           Members
          </Typography>
    <Grid container direction="row"
        alignItems="center"
        spacing={3} >
            <Grid item xs={12} sm={6} md={4}>
            <Developer/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            
             <Developer1/>
             </Grid>
             <Grid item xs={12} sm={6} md={4}>
            
            <Developer2/>
            </Grid>
            
<Grid/>
    </Grid>
    </Container>
    </div>

            </ThemeProvider>
            </div>
        )
}

export default Home
