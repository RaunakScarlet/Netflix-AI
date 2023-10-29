import { useSelector } from "react-redux";
import MoviesLists from "./MoviesLists";

const AiMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector((store) => store.aiMode);
    if (!movieNames) return null;

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            <div>
                {movieNames.map((movieName, index) => (
                    <MoviesLists
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]}
                    />
                ))}
            </div>
        </div>
    );
};
export default AiMovieSuggestion;
