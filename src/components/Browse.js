import Header from './Header';

import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpComingMovies from '../Hooks/useUpComingMovies';
import AIMode from './AIMode';
import { useSelector } from 'react-redux';


const Browse = () => {

    const aiModeState = useSelector(store => store.aiMode.mode);
    console.log(aiModeState);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    return (
        <div>
            <Header />
            {aiModeState ?<AIMode />
            :<>
                <MainContainer />
                <SecondaryContainer />
            </>}
        </div>
    );
}

export default Browse
