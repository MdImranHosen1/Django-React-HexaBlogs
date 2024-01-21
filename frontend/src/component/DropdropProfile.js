import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import defaultProfile from '../images/profile.png';

export default function DropdropProfile(props) {

    // console.log(props.authState.userData.username)
    // console.log(props.authState.userData.email)

    const navigate = useNavigate();

    const handleSignoutClick=async ()=>{
        localStorage.clear();
        
        try {
        
            const signoutResponse = await axios.get('http://127.0.0.1:8000/logout/');
            console.log(signoutResponse)
            navigate('/');
            window.location.reload();
            

          
        } catch (error) {
            console.error('Error during signout:', error);
        }
    }



    return (
        <div className="relative">
            {/* Profile with dropdown */}
            <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                onClick={props.toggleDropdown}
            >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full outline outline-1 outline-cyan-700" src={defaultProfile} alt="user photo" />
            </button>
            {/* Dropdown menu */}
            {props.isDropdownOpen && (
                <div className="z-50 my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow absolute right-0">
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900">{props.authState.userData.username}</span>
                        <span className="block text-sm text-gray-500 truncate">{props.authState.userData.email}</span>
                    </div>
                    <ul>
                        <li>
                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleSignoutClick}>Sign out</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
