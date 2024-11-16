import React, {useEffect} from 'react'
import { API_options } from '../utils/Contant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
const useNpwPlayingMovie = () => {
    const dispatch =  useDispatch();
    const PlayNowMoview = async()=>{
       const data = await fetch(API_options.url, API_options.options);
       const jsonData = await data.json();
       dispatch(addNowPlayingMovies(jsonData.results));
    }
    useEffect(()=>{
      PlayNowMoview();
    },[])
}

export default useNpwPlayingMovie
