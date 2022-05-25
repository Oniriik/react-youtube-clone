import axios from "axios";

export default function GetVideos(searchQuery) {
    axios.get("https://www.googleapis.com/youtube/v3/search?", {
        params: {
            part: "snippet",
            maxResults: 20,
            q: `${searchQuery}`,
            type: "type=video",
            key: "AIzaSyAx71_gEUkjvuD9k_-93GGJelqDzZjlWq8"
        }
    }).then((result) => {
        console.log(result)
        return result
        
    }).catch((err) => {
        
    });
}