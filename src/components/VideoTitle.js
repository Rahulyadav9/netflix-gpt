import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[15%] px-24 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button 
                className='bg-white text-black p-4 px-4 py-2 text-xl rounded-md hover:opacity-75'
            >
              ▶play
            </button>
            <button 
              className='ml-2 bg-slate-600 py-2 px-4 text-xl bg-opacity-50 text-white p-4 rounded-lg hover:opacity-50'>
              More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
