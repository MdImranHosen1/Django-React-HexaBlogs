import axios from 'axios';
import React, { useState } from 'react';
import { Link,useNavigate   } from 'react-router-dom';


export default function DropdownSignIn(props) {
    let navigate = useNavigate();
    const handleCreateAccountClick = () => {
        // Call both functions
        props.toggleDropdownSignup();
        props.toggleDropdownSignIn();
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSignInClick = async (e) => {
        e.preventDefault();

        console.log(formData)

        try {
        
            const signInResponse = await axios.post('http://127.0.0.1:8000/login/', formData);
            console.log(signInResponse)

            if (signInResponse.status === 200) {
                console.log('Sign In successful');
                props.setAuthState({isAuthenticated:true,userData:signInResponse.data});

                props.toggleDropdownSignIn()
                navigate('/');
                
            } else {
                console.error('Sign In failed');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <div className={`${props.isDropdownSignIn ? '' : 'invisible '} fixed inset-0 flex items-center justify-center backdrop-brightness-50 backdrop-contrast-75 `}>
            <div
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="relative p-4 w-full max-w-md max-h-full"
            >
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">Sign in to our platform</h3>
                        <button
                            type="button"
                            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center -gray-600"
                            data-modal-hide="authentication-modal"
                            onClick={props.toggleDropdownSignIn}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your username
                                </label>
                                <input
                                    type="text"
                                    name="username"  // Updated here
                                    id="usernameSignIn"
                                    value={formData.username}  // Updated here
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="passwordSignIn"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="rememberSignin"
                                            name="rememberSignin"  // Added name attribute
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                            required
                                        />
                                    </div>
                                    <label htmlFor="rememberSignin" className="ms-2 text-sm font-medium text-gray-900"> {/* Added label */}
                                        Remember me
                                    </label>
                                </div>
                                <Link to="#" className="text-sm text-blue-700 hover:underline">
                                    Lost Password?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                onClick={handleSignInClick}
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                Login to your account
                            </button>
                            <div className="text-sm font-medium text-gray-500">
                                Not registered? <Link to="#" className="text-blue-700 hover:underline" onClick={handleCreateAccountClick}>Create account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
