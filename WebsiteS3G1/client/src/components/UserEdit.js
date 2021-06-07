import { Grid , Container, makeStyles} from '@material-ui/core'

import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput, NumberInput, DateTimeInput, AutocompleteInput } from 'react-admin'



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

const UserEdit = (props) => {
    return (
        <Edit title="Edit User " {...props}>
        <SimpleForm>
        <MyCustomInput/>
         {/*   <TextInput disabled source='id' />
            <TextInput source="name" />
            <TextInput source="email" />
            <NumberInput source="mobile" />
                <NumberInput source="studentid" />
                <DateTimeInput source="date" /> 
                <DateTimeInput source="timein" /> 
                <DateTimeInput source="timeout" />
                <AutocompleteInput source="department" choices={[{ id: '1', name: 'MEDTECH' },{ id: '2', name: 'MSB' },{ id: '3', name: 'LCI' },{id:'4', name:"OTHER"}]} />
    */} 
              {/*
                <NumberInput source="mobile" />
             
             
                <NumberInput source="studentid" />
                
                <DateTimeInput source="date" /> 
                <DateTimeInput source="timein" /> 
                <DateTimeInput source="timeout" />
               <AutocompleteInput source="department" choices={[{ id: '1', name: 'MEDTECH' },{ id: '2', name: 'MSB' },{ id: '3', name: 'LCI' },{id:'4', name:"OTHER"}]} />
              */}

        </SimpleForm> 
</Edit>
    )
} 

export default UserEdit