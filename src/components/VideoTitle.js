import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-2xl md:text-6xl">{title}</h1>
            <p className="hidden md:inline-block w-1/4 py-6 text-lg">
                {overview}
            </p>
            <div className="my-16 md:m-0">
                <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg">
                    ▶️ Play
                </button>
                <button className=" hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle
