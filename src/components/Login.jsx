import React from "react";

function Login () {

    return (
        <div className="container-xl">
            <img className="mb-3" src={ require('../resources/dndLogo.png') } width="150px" height="150px"
                style={{borderRadius : "30%"}} alt=""  />
            
            <h3 className="mb-3">D&D Sheet 5e</h3>

            <div className="row">
                <div className="col-md-4 m-auto">
                    <input className="form-control mb-3" type="text" name="username" id="username" placeholder="Username"/>
                    <input className="form-control mb-3" type="password" name="pass" id="pass" placeholder="Password"/>

                    <button className="btn">Login</button>

                </div>
            </div>
        </div>
    );
}

export default Login;