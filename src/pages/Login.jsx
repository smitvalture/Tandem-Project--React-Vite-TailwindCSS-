import React from 'react'
import login_logo from './images/login-page-img.png'
import Input from '../pages/Input'
import Button from '../pages/Button'

const Login = () => {
    return (
        <div className='font-Poppins w-full h-screen flex justify-center items-center'>
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
                


                <Button />

            </section>
        </div>
    )
}

export default Login