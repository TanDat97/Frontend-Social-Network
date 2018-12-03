import React from 'react';
import Gallery from "react-grid-gallery"
const avatarPoster = {
    height: "auto",
    width: "auto",
    maxWidth: "60px",
    maxHeight: "60px",
    
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
        <div className="panel-body">
                    <div className="media">
                        <a className="media-left" href="#fake">
                            <img className= "img-rounded" style = {avatarPoster} src="https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_28/Anh_4.jpg"/>
                        </a>
                        <div className="media-body">
                            <a href = "#posterProfile"><h4 className="media-heading ">Poster's name</h4></a>
                            <div className = "col-12"> 
                                <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fugaDolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat., quasi rerum, eum, quo natus tenetur officia placeat.</p>
                                
                            </div>
                            <Gallery 
                                enableImageSelection={false} 
                                rowHeight={280} 
                                enableLightbox = {false}
                                
                                images= {image}
                            />
                            <ul className="nav nav-pills nav-pills-custom">
                                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-comment"></span></a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-share-alt"></span></a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-retweet"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    );
};

export default Post;