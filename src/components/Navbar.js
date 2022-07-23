import React, { Component } from 'react'
import {MdPets} from 'react-icons/md';
import './Navbar.css'
import{BsPerson,BsSearch}from 'react-icons/bs';
import{BiSearchAlt2} from 'react-icons/bi'
export default class Navbar extends Component {
  render() {
    return (
        <div >
        <nav  class="navbar nav-custom navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a href="/" class="navbar-brand" style={{marginRight:'180px'}} ><h1>PetLand</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item nav-item1">
                <a class="nav-link " href="/">Home
                 
                </a>
              </li>
              <li class="nav-item nav-item1">
                <a class="nav-link " href="/pets">Store</a>
              </li>
              <li class="nav-item nav-item1">
                <a class="nav-link " href="#">Services</a>
              </li>
               
               
            </ul>
            
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
