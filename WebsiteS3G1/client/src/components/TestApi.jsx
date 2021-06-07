import React, { Component } from 'react'
import axios from 'axios';



const api = axios.create({
    baseURL: `http://localhost:5001/`
})

export default class TestApi extends Component {
    constructor(){
        super()
        api.get(`/`).then(res=>{
            console.log(res.data)
        })
    }
    componentDidMount() {
        axios.get(`http://localhost:5001/users`)
          .then(res => {
         console.log(res.headers)
          })
      }
      render() {
        return (
          <h1>
            Heelo
          </h1>
        )
      }
    }