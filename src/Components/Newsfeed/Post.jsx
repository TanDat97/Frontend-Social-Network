import React, {Component} from 'react';
import { Media, Modal, Button, OverlayTrigger, Popover, Tooltip} from "react-bootstrap";


import Comments from "./Comments"

const avatarUser = {
    height: "40px",
    width: "40px",
    borderRadius: "50%"
}

class Post extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };
    }

    renderModal() {
        console.log("the link " + this.props.url + " was clicked.")
    
        return (
          <div className="modal show">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Modal 
                  title</h5>
    
                  <button type="button" className="close" data-dismiss="modal" 
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data- 
                   dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save 
                  changes</button>
                </div>
              </div>
            </div>
          </div>
        );
      }


    render() {
 
        return (
            <div className = "card">        
            <div className="card-body">
                <Media>
                    <Media.Body>
                        
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="#fake">
                                        <img alt="" className = "img-fluid" style ={avatarUser} src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG"/>
                                    </a>        
                                </li>
                                    
                                <li class="list-inline-item">
                                    <blockquote class="blockquote">
                                        <a href = "#posterProfile"><h5 className="">Poster's name</h5></a>   
                                        <footer><h6>1, tháng 1, 2018</h6></footer>
                                    </blockquote>
                                </li>
                            </ul>
                        

                        <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat.</p>
                        <img className = "img-fluid" src = "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg" />                  
                        <ul className="nav">
                            <li className = "nav-item">
                                <a className = "nav-link" href="/"><i class="fa fa-thumbs-up"></i></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href="/"><i className="fa fa-comment"></i></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href="/"><i className="fa fa-share-alt"></i></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" onClick={() => this.setState({showModal: true})}  ><i className="fa fa-share "></i></a>
                                
                            </li>
                        </ul>

                        {this.state.show && this.renderModal()}

                        <div class="dropdown-divider"></div>
                        <Comments/>                       

                    </Media.Body>
                   
                </Media>
            </div>
        </div>
        );
    }
}



export default Post;