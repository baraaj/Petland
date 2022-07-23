import React, { Component } from 'react'
import './petedit.css'
import Navbar from './Navbar'
import { Link, useParams } from 'react-router-dom';
import img from '../images/cute-australian-shepherd-dog-avatar-cartoon_357749-252.webp'

export default class Petedit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        id:this.props.id,
         msg:'',
         
          status:''
        }
        this.handleChange = this.handleChange.bind(this);
      }
        componentDidMount(){
            console.log(this.state.id)
        }
        handleChange(e) {
           
          this.setState({ status: e.target.value });
          console.log(this.state.status)
        }
editpet(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var raw = JSON.stringify({
        
        "category": {
          "id": 0,
          "name": this.state.category
        },
        
        
        
        "status": this.state.status
      });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://petstore.swagger.io/v2/pet/"+this.state.id, requestOptions)
      .then(response => response.text())
      .then(result => { if (result.success === false) {
        console.log("oups");
        this.setState({ errormessage:result.message})
        } {

   
          this.setState({msg:"Pet updated successfully !"})
     }
        })
        .catch(error => console.log('error', error));}

  render() {
    return (

        <div>
            <Navbar/>
        <div class="container-xl px-4" style={{marginTop:"100px",position:"relative"}}>
      
       
      
        <div class="row">
            
            <div >
              
                <div class="card mb-4" style={{marginLeft:'30px'}}>
                    <div class="card-header">Pet's Details</div>
                    <div class="card-body">
                        <form onSubmit={(e) => {
                                                    e.preventDefault();
                                                    this.editpet();}}>
                         <div class="row">
                            <div class="col-sm-6 mb-4">
                                <label class="small mb-1" for="inputName">Name</label>
                                <input class="form-control" id="inputName" type="text" placeholder="Enter name"  onChange={(e) => { this.setState({name: e.target.value }) }}/>
                            </div>
                     
                          
                              
                               
                            
                                <div class="col-sm-6 mb-4">
                                <label>Status</label>
                                    <select class="form-select" value="Status" for="inputStatus"onChange={this.handleChange}>
                                   <option value="available">available</option>
                                   <option value="sold">sold</option>
                                   <option value="pending">pending</option>
                                   </select>
                                </div>
                            </div>
                        
                         
                        
                        
                         
                            <button class="btn btn-primary" type="submit">Save changes</button>
                        </form>
                        {
                                                        this.state.msg !== '' ?
                                                            <div className="alert alert-success">
                                                                {this.state.msg}
                                                            </div>
                                                            :
                                                            <div ></div> }
                    </div>
                </div>
            </div>
        </div>
    </div></div>
    )
  }
}
