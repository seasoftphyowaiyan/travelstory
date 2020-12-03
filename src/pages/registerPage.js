import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div style={{backgroundColor: '#1a232f',
    backgroundImage: '-moz-radial-gradient(center center, circle cover, #273648, #0d1218 100%)',
    backgroundImage: '-webkit-radial-gradient(center center, circle cover, #273648, #0d1218 100%)', height: '100vh'}}>
            <div className="container login-register">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <img src="/img/travelstorylogo.png" className="img-fluid" alt=""/>
                        <h1 className="text-center my-5 text-white">Welcome to Travel Story!</h1>
                    </div>
                    <div className="col-md-5 bg-white m-auto p-5 rounded">
                        <form>
                            <div className="form-group">
                                <label htmlFor="displayname">Display Name</label>
                                <input type="text" className="form-control" id="displayname" required/>
                                <span className="focus"></span>
                            </div>
                            <div className="form-group position-relative">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" required/>
                                <span className="focus"></span>
                            </div>
                            <div className="form-group position-relative">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" required/>
                                <span className="focus"></span>
                                <input type="checkbox" className="showpassword"/>
                            </div>
                            <div className="form-group position-relative">
                                <label htmlFor="confirmpassword">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmpassword" required/>
                                <span className="focus"></span>
                                <input type="checkbox" className="showconfirmpassword"/>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-3 p-2" style={{background: '-webkit-linear-gradient(left, #08a8e2, #00c9c1, #00e648)', borderColor: '#01b7f2'}}>Sign Up</button>
                        </form>
                        <div className="text-center my-5">
                            <hr className="position-relative m-auto" style={{ top: 13 }}/>
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

export default RegisterPage;