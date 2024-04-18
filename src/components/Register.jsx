import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import loginImg from '../assets/undraw_secure_login_pdn4.svg';
import { authContext } from './AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {
    const [isEyeClicked, setIsEyeClicked] = useState(false)
    const myContext = useContext(authContext)
    const { createUser } = myContext
    const handleRegister = (e) => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoURL.value;
        const password = form.password.value;
        if(password.length < 6){
            Swal.fire({
                title: "Try Again!",
                text: "Pass should at least 6 character long",
                icon: "warning"
            });
        }
        else if(!/[A-Z]/.test(password)){
            Swal.fire({
                title: "Try Again!",
                text: "Use atleast one UPPERCASE!",
                icon: "warning"
            });
            
        }
        else if(!/[a-z]/.test(password)){
            Swal.fire({
                title: "Try Again!",
                text: "Use atleast one lowercase!",
                icon: "warning"
            });
        }
        else{
            createUser(email, password)
                .then(res => {
                    if (res.user) {
                        Swal.fire({
                            title: "User Created!",
                            text: "User has been created Successfully!",
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
        }
    const handleEye = () => {
        setIsEyeClicked(!isEyeClicked)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex md:flex-row flex-col-reverse justify-center">
                    <div className="card shrink-0 min-w-[350px] md:min-w-[500px] shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-4xl text-center font-bold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={(isEyeClicked) ? `text` : `password`}  name='password' placeholder="password" className="input input-bordered" required />
                            {
                                isEyeClicked ? 
                                <FaEyeSlash onClick={handleEye} className='absolute bottom-4 right-4' />
                                :
                            <FaEye onClick={handleEye} className='absolute bottom-4 right-4' />
                            }
                            </div>
                            <div className='mt-6'>
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left w-1/3">
                        <img className='w-full' src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;