import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../assets/undraw_secure_login_pdn4.svg';
import { authContext } from './AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const myContext = useContext(authContext)
    const { signinUser, signInWithGoogle, user, signInWithGithub } = myContext
    // console.log(user)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signinUser(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        title: "Logged In!",
                        text: "User has been LoggedIn Successfully!",
                        icon: "success"
                    });
                }
                else{
                    console.log('errororor')
                }
            })
            .catch(err => {
                Swal.fire({
                    title: "Try Again!",
                    text: "Something Went Wrong!",
                    icon: "warning"
                });
            })
    }
    const handleGoogle = () => {
        signInWithGoogle()
        .then(res => {
            if (res.user) {
                Swal.fire({
                    title: "Logged In!",
                    text: "User has been LoggedIn Successfully!",
                    icon: "success"
                });
            }

        })
        .catch(err => {
            Swal.fire({
                title: "Try Again!",
                text: "Something Went Wrong!",
                icon: "warning"
            });
        })
    }

    const handleGithub = () => {
        signInWithGithub()
        .then(res => {
            if (res.user) {
                Swal.fire({
                    title: "Logged In!",
                    text: "User has been LoggedIn Successfully!",
                    icon: "success"
                });
            }

        })
        .catch(err => {
            Swal.fire({
                title: "Try Again!",
                text: "Something Went Wrong!",
                icon: "warning"
            });
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex lg:flex-row flex-col-reverse justify-center">
                    <div className="card shrink-0 min-w-[300px] md:min-w-[500px] shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-4xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className='mt-6'>
                                <p>New to this website? <Link to="/register">REGISTER</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='p-2 mb-4'>
                            <button onClick={handleGoogle} className="btn btn-wide btn-outline mx-1">Google</button>
                            <button onClick={handleGithub} className="btn btn-wide btn-outline mx-1">Github</button>
                        </div>
                    </div>
                    <div className="text-center lg:text-left w-1/3">
                        <img className='w-full' src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;