import React, { Component } from 'react'
import './pets.css';
import {GrFormTrash} from 'react-icons/gr';
import Navbar from './Navbar';
export default class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pets:[],
          c:[]
          
        }}
        componentDidMount(){
            this.getpets();
        }
        deletepet(id){
var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch("https://petstore.swagger.io/v2/pet/"+id, requestOptions)
  .then(response => response.text())
  .then(result => {
    if (result.success === true) {

        this.getpets();
      console.log("pet deleted successfully!")
        }})
  .catch(error => console.log('error', error)); }
    getpets(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=available", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);

        this.setState({pets:result})
        console.log(this.state.pets)
    })

    .catch(error => console.log('error', error));
}
  render() {
    return (
        <div>
    
  
    <div class="container" style={{marginTop:'200px'}}>
      <a class="btn btn-success add" href='/petadd'>Add a pet</a>
        <div class="row">
            {this.state.pets.slice(0,9).map((p)=>{
                this.state.c=p.category;
             return(
            <div class="col-md-4">
                <div class="card-sl">
                    <div class="card-image">
                        <img
                            src={p.photoUrls} />
                    </div>

                    <a onClick={() => this.deletepet(p.id)} class="card-action" href="#"><GrFormTrash style={{fontWeight:'1rem'}} /></a>
                    <div class="card-heading">
                        {p.name}
                    </div>
                    <div class="card-text">
                        
                    </div>
                    <div class="card-text">
       
                    </div>
                    
                    <a class="card-button"href={"/petedit/"+p.id}> Edit</a>
                 
                </div>
            </div>)})}
            
        </div> </div>  
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav></div> 
    )
  }
}