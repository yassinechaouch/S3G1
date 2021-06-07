
import React from 'react'
import NavBar from './NavBar';
import { Sidebar, Layout } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import MyAppBar from '../MyAppBar';

const useSidebarStyles = makeStyles({
    drawerPaper: {
        backgroundColor: 'red',
    },
});

const MySidebar = props => {
    const classes = useSidebarStyles();
    return (
        <Sidebar classes={classes} {...props} />
    );
};


function MyLayout(props) {
    return (
        <div>
        <Layout  {...props} appBar={MyAppBar} />

        
        </div>
    )
}

export default MyLayout