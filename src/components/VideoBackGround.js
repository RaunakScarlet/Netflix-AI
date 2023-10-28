
import { useSelector } from 'react-redux';
import useTrailerVideo from '../Hooks/useTrailerVideo';


const VideoBackGround = ({ movieId }) => {
    
    const trailerInfo = useSelector((store) => store.movies?.trailer);
    console.log(trailerInfo);

   useTrailerVideo(movieId);
    return (
        <div className=" w-screen ">
            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailerInfo?.key+ "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
}

export default VideoBackGround
