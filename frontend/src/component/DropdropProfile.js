import React from 'react'
import { Link } from 'react-router-dom'

export default function DropdropProfile(props) {
    console.log(props)
    return (
        <div className="relative">
            {/* Profile with dropdown */}
            <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                onClick={props.toggleDropdown}
            >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            {/* Dropdown menu */}
            {props.isDropdownOpen && (
                <div className="z-50 my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow absolute right-0">
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900">Bonnie Green</span>
                        <span className="block text-sm text-gray-500 truncate">name@flowbite.com</span>
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
                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
