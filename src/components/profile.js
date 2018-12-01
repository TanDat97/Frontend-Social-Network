import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
        <div>
            <div class="panel panel-default">
                <div class="panel-body">
                    <a href="#"><img class="img-responsive" alt="" src="http://placehold.it/800x500"/></a>
                    <div class="row">
                        <div class="col-xs-3">
                        <h5>
                            <small>TWEETS</small>
                            <a href="#">1,545</a>
                        </h5>
                        </div>
                        <div class="col-xs-4">
                        <h5>
                            <small>FOLLOWING</small>
                            <a href="#">251</a>
                        </h5>
                        </div>
                        <div class="col-xs-5">
                        <h5>
                            <small>FOLLOWERS</small>
                            <a href="#">153</a>
                        </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel panel-default panel-custom">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Trends
                        <small><a href="#">ciao</a></small>
                    </h3>
                </div>

                <div class="panel-body">
                    <ul class="list-unstyled">
                        <li><a href="#">#Cras justo odio</a></li>
                        <li><a href="#">#Dapibus ac facilisis in</a></li>
                        <li><a href="#">#Morbi leo risus</a></li>
                        <li><a href="#">#Porta ac consectetur ac</a></li>
                        <li><a href="#">#Vestibulum at eros</a></li>
                        <li><a href="#">#Vestibulum at eros</a></li>
                        <li><a href="#">#Vestibulum at eros</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Profile;
