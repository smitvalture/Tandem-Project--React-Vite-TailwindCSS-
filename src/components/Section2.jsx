import React from 'react'
import { MdWork, MdLocationPin } from "react-icons/md";

const Section2 = () => {
    return (
        <section>
            <div className='w-full mt-[150px] mb-[150px] tab:mt-[100px] tab:mb-[100px] lap:mt-[150px] lap:mb-[150px]'>
                <div className='space-y-14 tab:space-y-20 lap:space-y-28 mb-40 flex flex-col justify-center items-center'>
                    <h1 className='text-center text-5xl tab:text-7xl h-20 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>Job Search</h1>
                    <div className='bg-white w-[350px] tab:w-[580px] lap:w-[800px] flex flex-col lap:flex-row justify-between items-center px-10 py-20 rounded-xl shadow-lg space-y-5 lap:space-y-0'>
                        <div className='flex flex-col tab:flex-row space-y-5 tab:space-y-0 tab:space-x-5 lap:mr-5 w-full'>
                            <div className='flex items-center bg-gray-100 px-2 py-1 shadow-lg border border-1 border-gray-500 hover:bg-gray-300 rounded-md w-full hover:border-cyan-500'>
                                <MdWork />
                                <input className='bg-gray-100 outline-none ml-2 w-full bg-transparent hover:bg-transparent' type="text" placeholder='Job Title' name="job" />
                            </div>
                            <div className='flex items-center bg-gray-100 px-2 py-1 shadow-lg border border-1 border-gray-500 hover:bg-gray-300 rounded-md w-full hover:border-cyan-500'>
                                <MdLocationPin />
                                <input className='bg-gray-100 outline-none ml-2 w-full bg-transparent hover:bg-transparent' type="Search" placeholder='Location' name="location" />
                            </div>


                        </div>
                        <button className='px-4 py-1 bg-blue-900 hover:bg-blue-800 shadow-lg shadow-blue-400 hover:shadow-blue-400/70 text-white rounded-full w-36 h-fit' type="submit">Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2