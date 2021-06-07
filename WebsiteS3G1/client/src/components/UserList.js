import React from 'react'
import { List, NumberField, Datagrid, TextField, EmailField, EditButton, DeleteButton, DateField, SelectField} from 'react-admin'


const UserList = (props) => { 
    return <List {...props}>
        <Datagrid>
            <TextField source="id" />   
            <TextField source="name" />
            <EmailField source="email" /> 
            <NumberField source="mobile" />
            <NumberField source="studentid" />
            <DateField source="date" showTime />
            <TextField source="timein" /> 
            <TextField source="timeout"/> 
            <SelectField source="department" choices={[{id:'1', name:"MEDTECH"}, {id:'2', name:"MSB"},{id:'3', name:"LCI"}, {id:"Other"}]}/>
            <NumberField source="pin" />
           {/* <EditButton basePath='/users' /> */}
            <DeleteButton basePath="/users" />
        </Datagrid> 
    </List> 
} 
 
export default UserList
  
