import React from 'react'
import moment from 'moment'

export default function (props) {
  const publishedAt = moment(props.video.publishedAt).fromNow()
  const title = props.video.title.length > 55 ? `${props.video.title.substring(0,55)}...` : props.video.title
  return (
    <div className="video-v">
        <img src={props.video.thumbnails.high.url} alt="videoTumbnail" />
        <div className="infos-container">
          <img className='channelIcon' src="https://i.ibb.co/wMzynzw/default-user-icon-20.jpg" alt="channelIcon" />
          <div className="infos">
            <p className='title'>{title}</p>
            <p className='channelTitle'>{props.video.channelTitle}</p>
            <p className='publishedAt'>x views - {publishedAt}</p>
          </div>
        </div>
    </div>
  )
}
