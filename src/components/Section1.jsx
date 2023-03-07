import React from 'react'
import Player from '../components/Player'




const Section1 = () => {

    return (
        <div className='w-full h-[calc(100vh-7q0px)] tab:h-[calc(100vh-75px)] lap:h-[calc(100vh-80px)] bg-[#d7e5f2] flex justify-center items-center'>
            <div className='max-w-[1240px] px-10 tab:px-14 lap:px-20 grid grid-cols-1 lap:grid-cols-2 place-content-center place-items-center'>
                <div>
                    <div className=''>
                        <h1 className='text-5xl tab:text-6xl h-20 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>High Paying Job</h1>
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo ipsa iusto eos provident magni eligendi nesciunt quae rerum, consectetur dolor? Fugit, rem ipsa ex ratione soluta veritatis? Optio, magnam.</p>
                    </div>
                    <div className='flex flex-row items-center space-x-5 mt-8'>
                        <button className='px-4 py-1 bg-blue-900 hover:bg-blue-800 shadow-lg shadow-blue-400 hover:shadow-blue-400/70 text-white rounded-full text-xl w-36 h-fit'>Get Started</button>
                        <button className='px-4 py-1 border border-1 border-blue-900 shadow-lg shadow-blue-400 hover:shadow-blue-400/70 rounded-full text-xl w-36 h-fit'>Login</button>
                    </div>
                </div>

                <div className=''>
                    <Player />
                </div>
            </div>
        </div>
    )
}

export default Section1