import { useSelector } from "react-redux"
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";
import SecondaryContainer from "./SecondaryContainer";


const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies)
    if (movies === null) return;
    const mainMovie = movies[0]
    // console.log(mainMovie);
    const { original_title, overview, id } = mainMovie
    return (
        <div>
            <VedioTitle title={original_title} overview={overview} />
            <VedioBackground movieId={id} />
            <SecondaryContainer/>
        </div>
    )
}


export default MainContainer