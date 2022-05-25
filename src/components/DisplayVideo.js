import React from 'react'
import axios from 'axios'

export default async function (props) {
    console.log(props.video.channelId)
    const channelIcon = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.video.channelId}&key=AIzaSyAx71_gEUkjvuD9k_-93GGJelqDzZjlWq8`)
    const icon = await channelIcon
  return (
    <div className="video">
        <img src={props.video.thumbnails.high.url} alt="videoTumbnail" />
        <img src={icon ? icon: "nothing"} alt="channelIcon" />
    </div>
  )
}
