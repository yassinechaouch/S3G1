
import React from 'react'
import NavBar from './NavBar';
import { Sidebar, Layout } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';


function Mylayouts(props) {
    return (
        <div>
            <Layout  {...props} appBar='none' />
 
        </div>
    )
}

export default Mylayouts
