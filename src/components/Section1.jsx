import React, { useState, useRef, useEffect } from 'react'




const Section1 = () => {

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <section>
            <div className='w-full mt-[150px] mb-[150px] tab:mt-[100px] tab:mb-[100px] lap:mt-[150px] lap:mb-[150px] flex justify-center items-center'>
                <div className='max-w-[1240px] lap:p-5 flex flex-col lap:flex-row place-content-center place-items-center space-y-8 lap:space-y-0'>
                    <div className='lap:space-y-32'>
                        <div className='flex flex-col items-center lap:items-start mr-5 w-full'>
                            <h1 className='text-5xl tab:text-6xl h-20 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>High Paying Job</h1>
                            <p className='mt-5 text-base tab:text-lg lap:text-xl lap:text-left text-center w-[350px] tab:w-[480px] lap:w-[520px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo ipsa iusto eos provident magni eligendi nesciunt quae rerum, consectetur dolor? Fugit, rem ipsa ex ratione soluta veritatis? Optio, magnam.</p>
                        </div>
                        <div className='flex flex-row items-center justify-center lap:justify-start space-x-5 mt-8 lap:mt-16'>
                            <button className='px-4 py-1 bg-blue-900 hover:bg-blue-800 shadow-lg shadow-blue-400 hover:shadow-blue-400/70 text-white rounded-full text-xl w-36 h-fit'>Get Started</button>
                            <button className='px-4 py-1 border border-1 border-blue-900 shadow-lg shadow-blue-400 hover:shadow-blue-400/70 rounded-full text-xl w-36 h-fit'>Login</button>
                        </div>
                    </div>

                    <div className='w-full'>
                        <video
                            controls
                            playsInline
                            loop
                            muted
                            alt="All the devices"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            ref={videoEl}
                            className='rounded-lg w-[350px] tab:w-[480px] lap:w-[520px] mx-auto'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1