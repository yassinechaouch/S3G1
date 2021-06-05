import { Grid , Container, makeStyles} from '@material-ui/core'

import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, NumberInput, DateTimeInput, AutocompleteInput } from 'react-admin'
import Home from '../Pages/Home';
 


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  

  const MyCustomInput = props => (
    <div className="special-input">
       <Container maxWidth="lg">
            <Grid container 
  direction="row"
  justify="space-around"
  alignItems="center" spacing={3}>  
              <Grid item  >
                <TextInput source="name"  />
                </Grid >
                <Grid item  >
                <TextInput source="email" />
                </Grid >
                <Grid item  >
                <NumberInput source="mobile" />
                </Grid >
            
                <Grid item  >
                <NumberInput source="studentid" />
                
                </Grid >
                <Grid item spacing={3}  >
                <DateTimeInput source="date" /> 
                </Grid>
                <Grid item spacing={3} >
                <DateTimeInput source="timein" /> 
                </Grid>
                <Grid item spacing={8} >
                <DateTimeInput source="timeout" />
                </Grid>
                  <Grid item spacing={8} >
               <AutocompleteInput source="department" choices={[{ id: '1', name: 'MEDTECH' },{ id: '2', name: 'MSB' },{ id: '3', name: 'LCI' },{id:'4', name:"OTHER"}]} />
               </Grid>
                
                
                </Grid>
               </Container>
    </div>
)

const redirect = (basePath, id, data) => `/Booking/home`;
const UserCreate = (props) => {
    const classes = useStyles();
    return (
        <Create title="Enter a User " {...props} >
            <SimpleForm margin="normal"  >
            <MyCustomInput/>
              {/*
                <NumberInput source="mobile" />
             
             
                <NumberInput source="studentid" />
                
                <DateTimeInput source="date" /> 
                <DateTimeInput source="timein" /> 
                <DateTimeInput source="timeout" />
               <AutocompleteInput source="department" choices={[{ id: '1', name: 'MEDTECH' },{ id: '2', name: 'MSB' },{ id: '3', name: 'LCI' },{id:'4', name:"OTHER"}]} />
              */}
            </SimpleForm>
            
        </Create>
    )
}

export default UserCreate
