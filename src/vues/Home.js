import React, { Component, useEffect } from 'react'
import axios from 'axios';
import DisplayVideo from '../components/DisplayVideo';
import data from './data.json'
import "../assets/styles/index.css"

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
    }
}

  async getData() {
    // const res = await axios.get("https://www.googleapis.com/youtube/v3/search?", {
    //   params: {
    //     part: "snippet",
    //     maxResults: 20,
    //     q: "reactjs",
    //     type: "type=video",
    //     key: "AIzaSyAx71_gEUkjvuD9k_-93GGJelqDzZjlWq8"
    //   }
    // })
    const res = data
    
    return await res
  }

  displayVideos(videos){
    var toDisplay = []
    console.log(videos)
    for (let i = 0; i < 20; i++) {
      const video = videos.data.items[i].snippet
      toDisplay.push(
        <DisplayVideo video={video} key={i}/>
      )
    }
    return toDisplay
  }
  componentDidMount() {

    this.getData().then(res => {
      this.setState({videos: {... res}})
    })
      .catch(err => {
        console.error(err);
      })
  }



  render() {
    return (
      <div className='home'>
        {this.state.videos ? this.displayVideos(this.state.videos) : "no videos"}
      </div>
      
    )
  }
}
