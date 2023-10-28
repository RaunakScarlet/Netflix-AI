import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="w-1/4 py-6 text-lg">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">▶️ Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle
