import React from 'react';
import logo from '../assets/img/travelstorylogo.png';
import '../assets/css/login-register.css';
import { Link } from 'react-router-dom';

class RegisterPage extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    
    handelChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    register = (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        fetch(
                "https://travelstory-ticket.herokuapp.com/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                body: JSON.stringify({
                        displayName: displayName,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword,
                    }),
                }
            )
            .then(res => res.json())
            .then(res => {
                // localStorage.setItem("user", JSON.stringify(res.user._id));
                // localStorage.setItem("token", res.token);
                console.log(res);
                window.location.href = "/email-confirm";
            })
        
    };
    render() {
        return (
            <div style={{
                backgroundColor: '#1a232f',
                backgroundImage: 'radial-gradient(center center, circle cover, #273648, #0d1218 100%)', height: '100vh'
            }}>
                <div className="container login-register">
                    <div className="row">
                        <div className="col-md-12 text-center mt-5">
                            <img src={logo} className="img-fluid" alt="" />
                            <h1 className="text-center my-5 text-white">Welcome to Travel Story!</h1>
                        </div>
                        <div className="col-md-5 bg-white m-auto p-5 rounded">
                            <form onSubmit={this.register}>
                                <div className="form-group">
                                    <label htmlFor="displayName">Display Name</label>
                                    <input type="text" className="form-control" name="displayName" value={this.state.displayName} onChange={this.handelChange} required />
                                    <span className="focus"></span>
                                </div>
                                <div className="form-group position-relative">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handelChange} required />
                                    <span className="focus"></span>
                                </div>
                                <div className="form-group position-relative">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handelChange} required />
                                    <span className="focus"></span>
                                    <input type="checkbox" className="showpassword" />
                                </div>
                                <div className="form-group position-relative">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handelChange} required />
                                    <span className="focus"></span>
                                    <input type="checkbox" className="showconfirmpassword" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3 p-2" style={{ background: '-webkit-linear-gradient(left, #08a8e2, #00c9c1, #00e648)', borderColor: '#01b7f2' }}>Sign Up</button>
                            </form>
                            <div className="text-center my-5">
                                <hr className="position-relative m-auto" style={{ top: 13 }} />
                                <span className="position-relative px-3 bg-white">Or Sign Up Using</span>
                            </div>
                            <div className="row justify-content-around mx-0">
                                <div className="col-5 rounded-pill bg-primary text-white text-center p-2 w-25">
                                    Facebook
                            </div>
                                <div className="col-2 text-center p-2">
                                    Or
                            </div>
                                <div className="col-5 rounded-pill bg-danger text-white text-center p-2">
                                    Google
                            </div>
                            </div>
                            <div className="text-center mt-3">
                                <p className="mb-0">Already a member? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegisterPage;