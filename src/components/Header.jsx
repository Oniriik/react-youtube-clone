import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import "../assets/styles/header.css"
import GetVideos from '../scripts/getVideos';

export default function Header() {
  const [searchQuery, setSearch] = useState('');
  async function search() {
    const videos = await GetVideos(searchQuery)
    console.log(videos)
  }
  
  return (
    <div >
      <div className='header'>
        <img src="https://i.ibb.co/9hZcX1Y/yt-logo.png" alt="logo" />
        <div className='searchBar'>
          <input value={searchQuery} onChange={event => setSearch(event.target.value)} type="text" placeholder='Search' />
          <Link className='button' to={`/results/${searchQuery}`} ><img src="https://i.ibb.co/WPnzgLt/icons8-chercher-50.png" alt="searchIcon" /></Link>
        </div>
        <button>Se Connecter</button>
      </div>

    </div>
  )
}
