import React, { Component } from 'react'
import Navbar from './Navbar'
import img1 from '../images/animals.jpg'

export default class Home extends Component {
  render() {
    return (
     <div>
         <img src={img1} style={{width:"600px"}}/>
        <section></section>
     </div>
    )
  }
}
