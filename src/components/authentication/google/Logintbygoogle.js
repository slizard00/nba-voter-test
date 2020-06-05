import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

export class Logintbygoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signup(res) {
    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'
    };
   debugger;
    axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleresponse)
      .then((result) => {
        sessionStorage.setItem("userData", JSON.stringify(result));
        this.props.history.push('/Dashboard')
      });
  };
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Login With Google Using ReactJS
            </div>
        </div>
        <div className="row">
          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <GoogleLogin
                clientId="258952794942-quorosaavtbtbs5em6d3huugqllp7o2v.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} ></GoogleLogin>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Logintbygoogle;