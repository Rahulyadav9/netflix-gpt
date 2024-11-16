import React from 'react'
import Header from './Header'
import useNpwPlayingMovie from '../myHooks/useNpwPlayingMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNpwPlayingMovie();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}
//https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg
export default Browse
