import React from 'react'
import { Admin, Resource } from 'react-admin'

import NavBar from './components/NavBar'
import MyLayout from './components/MyLayout'
import './App.css'
import Home from './Pages/Home'
import { AUTH_LOGIN } from 'react-admin';
import authProvider from './authProvider';
import Dashboard from './Pages/Dashboard'
import AdminPage from './Pages/AdminPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BookingUser from './Pages/BookingUser'
import TestApi from './components/TestApi'


function App() {
  return (
    <Router>
<div className='App'>
{/*
 <TestApi/>
 */}
<Switch>
  <Route path='/home' exact component={Home}/>
  <Route path='/Admin' component={AdminPage}/>
  <Route path="/Booking" component={BookingUser}/>  
</Switch>

  {/*<Home/> 
  
    <Admin dashboard={Dashboard} layout={MyLayout} authProvider={authProvider} dataProvider={restProvider('http://localhost:3000')}>
       <Resource className="Resource"
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  */   }
   </div> 
   </Router>
  )
}

export default App
//dataProvider={restProvider('http://localhost:3000')}