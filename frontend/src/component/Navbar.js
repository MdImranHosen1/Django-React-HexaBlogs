import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import hexaLogo from '../images/hexaLogo.png';
import DropdropProfile from './DropdropProfile';
import axios from 'axios';



export const Navbar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };


    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            // Replace 'http://localhost:8000/api/user/' with your actual backend URL
            const response = await axios.get('http://127.0.0.1:8000/user/', { withCredentials: true });
            setUserData(response.data);
            setIsAuthenticated(true);
          } catch (error) {
            console.error(error);
            setIsAuthenticated(false);
          }
        };
    
        fetchUserData();
      }, []);

    return (
        <nav className='bg-gray-300 border-gray-200 '>
            <div className='flex max-w-screen-xl flex-wrap justify-between items-center mx-auto p-1'>
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={hexaLogo} className="h-8" alt="hexaLogo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">HexaBlog</span>
                </Link>
                    {/* Search option */}
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                </div>
                {isAuthenticated ? (<DropdropProfile isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />):
                (<div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </div>)
                }
                
            </div>
        </nav>
    );
};