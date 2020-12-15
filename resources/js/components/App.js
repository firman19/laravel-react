import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container-login">
            <div className="wrapper">
                <div className="form-group item" >
                    <img src="/images/logo-eklipse.svg"/>
                </div>
                <div className="form-group item" >
                    <input type="text" className="form-control input" placeholder="Email"/>
                </div>
                <div className="form-group item">
                    <input type="text" className="form-control input" placeholder="Password"/>
                </div>
                <div className="form-group item">
                    <button type="submit" className="mybtn form-control">Log In</button>
                </div>
                <div className="form-group item">
                    <a href="#">Forgot Your Password?</a>
                </div>
                <div className="form-group item">
                    <p className="mb-0 inactive">Don't have an account?</p>
                    <a href="#">Create an Account</a>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
