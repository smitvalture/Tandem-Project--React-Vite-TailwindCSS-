import React from 'react'
import { IoClose } from "react-icons/io5";
import login_logo from './images/login-page-img.png'
import Input from '../pages/Input'




const Login = () => {
    return (
        <form action="" method="post" className='font-Poppins w-full h-screen bg-gray-200 flex justify-center items-center'>

            <section className='flex flex-col items-center space-y-4 w-72'>
                <img className='w-40 tab:w-48 lap:w-52 rounded-full' src={login_logo} alt="login-img" />
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email or phone no. "
                />
                <Input
                    type="password"
                    name="pwd"
                    placeholder="Password"
                />

                {/* Alert */}

                {/* <select
                    id="type-signup"
                    required=""
                    className="bg-gray-50 text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 w-60 tab:w-64 lap:w-72 m-auto h-10"
                    defaultValue={'DEFAULT'}
                >
                    <option value="DEFAULT" disabled hidden>
                        Login as
                    </option>
                    <option className="text-gray-700 font-Poppins" value="1">
                        Employee
                    </option>
                    <option className="text-gray-700 font-Poppins" value="2">
                        Business
                    </option>
                </select> */}


                <div className='flex justify-between items-center text-sm w-64 px-4'>
                    <div className='flex items-center'>
                        <input type="checkbox" />
                        <p className='ml-1'>Remember Me</p>
                    </div>

                    <a className='text-blue-900 hover:text-blue-600 hover:underline' href="">Forgot Password</a>
                </div>

                {/* Error message */}
                <div className='hidden'>
                    <div className='border border-1 border-red-600 bg-red-200 w-60 tab:w-64 lap:w-72 h-fit p-1.5 flex items-center space-x-1'>
                        <p className='text-red-800 text-[10px] lap:text-xs font-semibold'>Error:</p>
                        <span className='text-red-600 text-[10px] lap:text-xs w-60'>You have entered incorrect login details.</span>
                        <a href="#">
                            <IoClose className='text-red-900' />
                        </a>
                    </div>
                </div>

                <button
                    className="bg-[#15213A] hover:bg-[#1e3055] shadow-lg shadow-blue-900/70 hover:shadow-blue-900/40 text-gray-300 w-60 tab:w-64 lap:w-72 h-9 mx-auto rounded-md font-Poppins tracking-wide"
                    type="submit"
                    name="login_button"

                >
                    Login
                </button>

                <div>
                    <a className='text-blue-900 hover:text-blue-600 hover:underline text-sm' href="#">Create new account</a>
                </div>

            </section>
        </form>
    )
}

export default Login