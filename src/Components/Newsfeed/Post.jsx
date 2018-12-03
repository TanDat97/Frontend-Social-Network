import React from 'react';
import Gallery from "react-grid-gallery"
import { Media} from "react-bootstrap"
const avatarPoster = {
    height: "auto",
    width: "auto",
    maxWidth: "60px",
    maxHeight: "60px",
    
} 

const avatarUser = {
    height: "50px",
    width: "50px",
    borderRadius: "50%"
}

const Post = () => {
    const image = [{
        src: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        thumbnail: "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
    }]
    return (
        <div className = "card">        
            <div className="card-body">
            
                <Media>
                    <Media.Left>
                    <a className="mr-3" href="#fake">
                        <img alt=""  style ={avatarUser} src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG"/>
                    </a>
                    </Media.Left>
                    <Media.Body>
                        <a href = "#posterProfile"><h4 className="media-heading ">Poster's name</h4></a>
                        
                            <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat.</p>
                            
                        
                        <img className = "img-fluid" src = "https://znews-photo.zadn.vn/w1024/Uploaded/mdf_xqkxvu/2018_11_19/Lucern1.JPG" />
                        <img className = "img-fluid" src = "https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_2.jpeg" />
                        
                        
                        <ul className="nav">
                            <li className = "nav-item">
                                <a className = "nav-link" href="#"><i class="fa fa-star"></i></a>
                            </li>
                            
                            <li className = "nav-item">
                                <a className = "nav-link" href="#"><i className="fa fa-comment"></i></a>
                            </li>
                            
                            <li className = "nav-item">
                                <a className = "nav-link" href="#"><i className="fa fa-share-alt"></i></a>
                            </li>
                            
                            <li className = "nav-item">
                                <a className = "nav-link" href="#"><i className="fa fa-retweet"></i></a>
                            </li>
                        </ul>
                       
                       
                        </Media.Body>
                    </Media>
                </div>
            </div>
    );
};

export default Post;