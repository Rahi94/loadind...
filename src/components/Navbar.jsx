import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from './AuthProvider';
import Swal from 'sweetalert2';
import 'animate.css';

const Navbar = () => {
    const { user, signOutUser, setUser } = useContext(authContext)
    console.log(user)
    const handleLogOut = () => {
        signOutUser()
            .then(res => {
                Swal.fire({
                    title: "Logged Out",
                    text: "User has been Logged Out Successfully!",
                    icon: "success"
                });
                setUser(null)
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="navbar bg-base-100 lg:h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className={({ isActive }) => isActive ? " text-blue-600 font-bold text-md font-lg  underline" : ""}>
                            Home
                        </NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? " text-blue-600 font-bold text-md font-lg  underline" : ""}>
                            Blog
                        </NavLink>
                    </ul>
                </div>
                <Link to="/" className=" text-3xl animate__animated animate__bounce">Residento!</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/" className={({ isActive }) => isActive ? " text-blue-600 font-bold text-md font-lg  underline" : ""}>
                        Home
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? " text-blue-600 font-bold text-md font-lg  underline" : ""}>
                        Blog
                    </NavLink>

                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <div className='flex justify-center'>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            
                            <div className="w-10 rounded-full">
                            <div className="tooltip" data-tip="hello">
                                <img  alt="Tailwind CSS Navbar component" src={user.photoURL ? user.photoURL : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'} />
                            </div>
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="btn">LogOut</button>
                    </div>
                        :
                        <Link to="/login" className="btn">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;