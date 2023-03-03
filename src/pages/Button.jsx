import React from 'react'

const Button = () => {
    return (
        <div>
            <button
                className="bg-[#15213A] hover:bg-[#1e3055] text-gray-300 w-60 tab:w-64 lap:w-72 h-9 mx-auto rounded-md font-Poppins tracking-wide"
                type="submit"
                name="login_button"
            >
                Login
            </button>
        </div>
    )
}

export default Button