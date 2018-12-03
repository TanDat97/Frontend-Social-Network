import React, { Component } from 'react';

class Profile extends Component{
    handleChange = (e) =>  {
        this.setState({
            [e.target.id] : e.target.value
        })
        
    }

    handleSubmit = (e) =>  {
        e.preventDefault();
        
    }
render(){

    return (

        <div class="panel rounded shadow">
                    
            <div className="row">
            <h2><strong>Profile</strong> </h2>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form onSubmit = {this.handleSubmit} className = "white"> 
                        
                        
                        <div>
                            <label htmlFor = "text">FirstName</label>
                            <input text type ="text" id = "firstName" onChange= {this.handleChange} style = {{maxWidth:1000}}/>
                        </div>

                        <div className = "input-field">
                            <label htmlFor = "text">LastName</label>
                            <input type ="text" id = "lastName" onChange= {this.handleChange}/>
                        </div>

                        <div className = "input-field">
                            <label htmlFor = "email">Email</label>
                            <input type ="email" id = "email" onChange= {this.handleChange}/>
                        </div>
                        
                        <div className = "input-field">
                            <label htmlFor = "password">Password</label>
                            <input type ="password" id = "password" onChange= {this.handleChange}/>
                        </div>

                        <div className = "input-field">
                            <button type="submit" class="btn btn-primary blue">Submit</button>
                        </div>
                        
                    </form>
            </div>
            </div>
        </div>

    )
}

}
export default Profile