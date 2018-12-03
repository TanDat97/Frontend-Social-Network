
import React, { Component } from 'react';
imp

class Newfeed extends Component {
  render() {
    return (
        <div class="col-sm-6">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <div class="media">
                        <a class="media-left" href="#fake">
                            <img alt="" class="media-object img-rounded circle-avatar" src="http://placehold.it/35x35"/>
                        </a>
                        <div class="media-body">
                            <div class="form-group has-feedback">
                                <label class="control-label sr-only" for="inputSuccess5">Hidden label</label>
                                <input type="text" class="form-control" id="search2" aria-describedby="search"/>
                                <span class="glyphicon glyphicon-camera form-control-feedback" aria-hidden="true"></span>
                                <span id="search2" class="sr-only">(success)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="media">
                        <a class="media-left" href="#fake">
                            <img alt="" class="media-object img-rounded circle-avatar" src="http://placehold.it/64x64"/>
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading">Media heading</h4>
                            <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.</p>
                            <ul class="nav nav-pills nav-pills-custom">
                                <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-comment"></span></a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-share-alt"></span></a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-retweet"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <div class="panel panel-default">
                <div class="panel-heading">Prova</div>
                <div class="panel-body">
                    <ul class="nav nav-pills">
                        <li role="presentation" class="active"><a href="#">Home</a></li>
                        <li role="presentation"><a href="#">Profile</a></li>
                        <li role="presentation"><a href="#">Messages</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Newfeed;

