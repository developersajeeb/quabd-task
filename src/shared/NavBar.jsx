import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="bg-gray-100 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-1">
                <Link to='/'>
                    <h1 className="self-center text-2xl font-semibold whitespace-nowrap">Movies</h1>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden border-2 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setOpen(!isOpen) }}>
                    <Hamburger size={25}></Hamburger>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-indigo-500 font-medium' : 'text-gray-800'}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/my-bookings' className={({ isActive }) => isActive ? 'text-indigo-500 font-medium' : 'text-gray-800'}>
                            <li>My Bookings</li>
                        </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-indigo-500 font-medium' : 'text-gray-800'}>
                            <li>Blog</li>
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-indigo-500 font-medium' : 'text-gray-800'}>
                            <li>About</li>
                        </NavLink>
                        <NavLink to='/login'>
                            <li className='text-gray-800 bg-transparent border border-gray-400 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white duration-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2'>Login</li>
                        </NavLink>

                    </ul>
                </div>
                <ul className={`font-medium p-4 pt-3 grid gap-3 w-32 border text-center border-gray-300 rounded-lg bg-gray-50 md:hidden absolute duration-500 z-50 ${isOpen ? 'right-2 top-20' : 'hidden'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-indigo-500 font-medium' : 'text-gray-800'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/my-bookings' className={({ isActive }) => isActive ? 'text-indigo-500 font-medium' : 'text-gray-800'}>
                        <li>My Bookings</li>
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-indigo-500 font-medium' : 'text-gray-800'}>
                        <li>Blog</li>
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-indigo-500 font-medium' : 'text-gray-800'}>
                        <li>About</li>
                    </NavLink>
                    <NavLink to='/login'>
                        <li className='w-full text-gray-800 bg-transparent border border-gray-400 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white duration-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2'>Login</li>
                    </NavLink>
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;