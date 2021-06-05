import React from 'react'
import { defaultTheme } from "react-admin";
import { createMuiTheme } from '@material-ui/core/styles';
import { Admin, Resource , fetchUtils } from 'react-admin'
import authProvider from '../authProvider'
import MyLayout from '../components/MyLayout'

import UserCreate from '../components/UserCreate'
import UserEdit from '../components/UserEdit'
import axios from 'axios';

import UserList from '../components/UserList'
import Dashboard from './Dashboard'
import simpleRestProvider from 'ra-data-simple-rest'

//restProvider
import MyLoginPage from './MyLoginPage'
//import MyLogoutButton from './MyLogoutButton'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import customRoutes from '../customRoutes'
import MyLogoutButton from './MyLogoutButton';
import TestApi from '../components/TestApi';

const theme = createMuiTheme({
    ...defaultTheme,
    sidebar: {
        width: 300, // The default value is 240
        closedWidth: 70, // The default  value is 55
    }, 
});   
 
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
   // options.headers.set('X-Total-Count', 'posts 0-20/20')
    return fetchUtils.fetchJson(url, options);
  }

const dataProvider = simpleRestProvider('http://localhost:5001' , fetchUtils.fetchJson, 'X-Total-Count');

function AdminPage() {
    
    return ( 
        <div>
            <Admin authProvider={authProvider}  theme={theme}  customRoutes={customRoutes} dashboard={Dashboard} layout={MyLayout}  dataProvider={dataProvider}>
          <Resource name="users" list={UserList} create={UserCreate} />
            </Admin>
        </div>
    ) 
} 

export default AdminPage 
   