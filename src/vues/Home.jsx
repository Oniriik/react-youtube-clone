import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import DisplayVideo from '../components/DisplayVideo.jsx'
import "../assets/styles/index.css"

export default function Home(props) {
  const [videos, setVideos] = useState([]);
  const [searchFilter, setSearchFilter] = useState('reactjs');
  useEffect(() => {
    axios.get("https://www.googleapis.com/youtube/v3/search?", {
        params: {
            part: "snippet",
            maxResults: 20,
            q: `${searchFilter}`,
            type: "type=video",
            key: "AIzaSyA9BkGmkMbUESiyeuqzn_EozYC8kzq5Pq0"
        }
    }).then((result) => {
        setVideos(result.data.items)
        
    }).catch((err) => {
        console.error(err)
    });
  },[searchFilter]);






  return (
    <div className='home'>
       {
         videos.map((video, index) => (
        <DisplayVideo video= {video.snippet} key={index}/>
      ))}
    </div>

  )

}
