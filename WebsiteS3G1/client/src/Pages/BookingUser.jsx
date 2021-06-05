import React from 'react'
import { Admin , Resource,fetchUtils  } from 'react-admin'
import UserCreate from '../components/UserCreate'
import restProvider from 'ra-data-simple-rest'
import Mylayouts from '../components/Mylayouts'
import NavBar from '../components/NavBar'
import UserCreate1 from '../components/UserCreate1'

 
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
   // options.headers.set('X-Total-Count', 'posts 0-20/20')
    return fetchUtils.fetchJson(url, options);
  }

const dataProvider = restProvider('http://localhost:5001' , fetchUtils.fetchJson, 'X-Total-Count');


function BookingUser() {
    return (
        <div>
         
            <Admin dataProvider={dataProvider} layout={Mylayouts}>
            <Resource name="users" list={UserCreate} create={UserCreate1}/>
            </Admin>
        </div>
    )
}

export default BookingUser
