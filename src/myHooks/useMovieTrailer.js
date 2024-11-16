import {useEffect} from 'react'
import {API_options} from "../utils/Contant";
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';
const useMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();
    const getMovieVideos = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
        API_options.options
        )
        const json = await data.json();
        const filterTrailer = json.results.filter(res=>res.type==="Trailer");
        const trailer = filterTrailer[0] ?? json.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(()=>{
        getMovieVideos()
    }, [])
}

export default useMovieTrailer
