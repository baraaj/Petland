import React, { Component } from 'react'
import './petedit.css'
import Navbar from './Navbar'
import img from '../images/cute-australian-shepherd-dog-avatar-cartoon_357749-252.webp'
export default class Petadd extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
          name:'',
          id:'',
          status:'',tags:'',
          category:'',
          idcategory:0,
          idtags:0,
          errormessage:'',msg:''
        }
        this.handleChange = this.handleChange.bind(this);
      
      }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          
          this.setState({
            image: event.target.files[0]
          });
    console.log(this.state.image)
        }}
        create(){
            var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": 0,
  "category": {
    "id": 0,
    "name": this.state.category
  },
  "name": this.state.name,
  "photoUrls": [
    this.state.image
  ],
  "tags": [
    {
      "id": 0,
      "name": this.state.tags
    }
  ],
  "status": this.state.status
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://petstore.swagger.io/v2/pet", requestOptions)
  .then(response => response.json())
  .then(result => { if (result.success === false) {
    console.log("oups");
    this.setState({ errormessage:result.message})
    } else {

   
         this.setState({msg:"Pet added successfully !"})
    }
    })
  .catch(error => console.log('error', error));
        }
handleChange(e) {
           
            this.setState({ status: e.target.value });
            console.log(this.state.status)
          }
  render() {
    return (

        <div>
            
        <div class="container-xl px-4 " style={{marginTop:"100px",position:"relative"}}>
      
       
      
        <div class="row">
            <div class="col-xl-4">
            
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Pet's Picture</div>
                    <div class="card-body text-center">
                       
                        <img class="img-account-profile rounded-circle mb-2" src={img} alt=""/>
                      
                        <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        <input type="file"onChange={this.onImageChange}/>
                       
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
              
                <div class="card mb-4">
                    <div class="card-header">Pet's Details</div>
                    <div class="card-body">
                        <form onSubmit={(e) => {
                                                    e.preventDefault();
                                                    this.create();}}>
                       
                            <div class="mb-3">
                                <label class="small mb-1" for="inputName">Name</label>
                                <input class="form-control" id="inputName" type="text" placeholder="Enter name" onChange={(e) => { this.setState({name: e.target.value }) }}/>
                            </div>
                     
                            <div class="row gx-3 mb-3">
                              
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputID">ID</label>
                                    <input class="form-control" id="inputID" type="text" placeholder="Enter ID" onChange={(e) => { this.setState({id: e.target.value }) }}/>
                                </div>
                              
                                <div class="col-md-6">
                                    <label>Status</label>
                                    <select class="form-select" value="Status" for="inputStatus"onChange={this.handleChange}>
                                   <option value="available">available</option>
                                   <option value="sold">sold</option>
                                   <option value="pending">pending</option>
                                   </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputCategory">Category</label>
                                    <input class="form-control" id="inputCategory" type="text" placeholder="Enter category"  onChange={(e) => { this.setState({category: e.target.value }) }}/>
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputTags">Tags</label>
                                    <input class="form-control" id="inputTags" type="text" placeholder="Enter tags"  onChange={(e) => { this.setState({tags: e.target.value }) }}/>
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
