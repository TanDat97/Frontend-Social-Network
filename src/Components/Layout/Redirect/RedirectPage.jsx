import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from "../../../Plugin/LoadingSpinner"
function mapStateToProps(state) {
    return {

    };
}

class RedirectPage extends Component {
    render() {
        return (
            <div>
                <LoadingSpinner/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(RedirectPage);