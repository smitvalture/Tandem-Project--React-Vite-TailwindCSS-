import React from 'react'
import { MdWork, MdLocationPin } from "react-icons/md";

const Section2 = () => {
    return (
        <div className='w-full h-[calc(100vh-250px)] tab:h-[calc(100vh-200px)] lap:h-[calc(100vh-160px)] flex justify-center items-center'>
            <div className='space-y-14 tab:space-y-20 lap:space-y-28 mb-40'>
                <h1 className='text-center text-5xl tab:text-7xl h-20 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>Job Search</h1>
                <div className='bg-white w-[350px] tab:w-[580px] lap:w-[800px] flex flex-col lap:flex-row justify-between items-center px-10 py-20 rounded-xl shadow-lg space-y-5 lap:space-y-0'>
                    <div className='flex flex-col tab:flex-row space-y-5 tab:space-y-0 tab:space-x-5 lap:mr-5 w-full'>
                        <div className='flex items-center bg-gray-100 px-2 py-1 shadow-lg border border-1 border-gray-500 rounded-md w-full hover:border-cyan-500'>
                            <MdWork />
                            <input className='bg-gray-100 outline-none ml-2 w-full' type="text" placeholder='Job Title' name="job" />
                        </div>
                        <div className='flex items-center bg-gray-100 px-2 py-1 shadow-lg border border-1 border-gray-500 rounded-md w-full hover:outline-cyan-500'>
                            <MdLocationPin />
                            <input className='bg-gray-100 outline-none ml-2 w-full' type="Search" placeholder='Location' name="location" />
                        </div>


                    </div>
                    <button className='px-4 py-1 bg-blue-900 hover:bg-blue-800 shadow-lg shadow-blue-400 hover:shadow-blue-400/70 text-white rounded-full w-36 h-fit' type="submit">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Section2