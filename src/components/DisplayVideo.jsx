import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

export default function DisplayVideo({ video, vertical }) {
  console.log(video)

  const [channelIcon, setChannelIcon] = useState('')
  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.channelId}&key=AIzaSyClzvd3iNUBxI5euNzyihND1Rd6OMzfsP0`
    )
      .then(res => {

        setChannelIcon(res.data.items[0].snippet.thumbnails.high.url)
      })
      .catch(err => {
        console.error(err);
      })
  })




  const publishedAt = moment(video.publishedAt).fromNow()
  const title = video.title.length > 55 ? `${video.title.substring(0, 55)}...` : video.title

  return (
    <div className={vertical ? "video-v" : "video-h"}>

      <div className='img-container'>
        <img src={video.thumbnails.high.url ? video.thumbnails.high.url : "https://i.ibb.co/qF9JmhC/blank-youtube-thumbnail.png"} alt="videoTumbnail" />
      </div>

      <div className="infos-container">
        <img className='channelIcon' src={channelIcon ? channelIcon : "https://i.ibb.co/wMzynzw/default-user-icon-20.jpg"} alt="channelIcon" />
        
        <div className="infos">
          <p className='title'>{title}</p>
          <p className='channelTitle'>{video.channelTitle}</p>
          <p className='publishedAt'>x views - {publishedAt}</p>
        </div>

      </div>

    </div>
  )
}
