
import useTrailerVideo from '../Hooks/useTrailerVideo';


const VideoBackGround = ({ movieId }) => {
    
    
   const trailerInfo= useTrailerVideo(movieId);
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/"+trailerInfo.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
}

export default VideoBackGround
