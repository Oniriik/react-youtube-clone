import React, {useState,useEffect}from 'react'
import { useParams } from 'react-router-dom';
import DisplayVideo from '../DisplayVideo';
import data from './data.json'
import axios from 'axios';

import './search.css'

export default function Search() {
    const {search_query} = useParams()
    const [videos, setVideos] = useState([]);
    const [searchFilter, setSearchFilter] = useState(search_query);
    useEffect(() => {
      axios.get("https://www.googleapis.com/youtube/v3/search?", {
          params: {
              part: "snippet",
              maxResults: 20,
              q: `${searchFilter}`,
              type: "type=video",
              key: "AIzaSyClzvd3iNUBxI5euNzyihND1Rd6OMzfsP0"
          }
      }).then((result) => {
          setVideos(result.data.items)
          
      }).catch((err) => {
          console.error(err)
      });
    },[searchFilter]);

  return (
    <div className='search'>
       {
        videos.map((video, index) => (
        <DisplayVideo video={video.snippet} vertical = {true}/>
      ))}
    </div>
  )
}
