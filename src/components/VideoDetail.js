import React from 'react'
import {Paper, Typography } from '@material-ui/core'
const VideoDetail= ({video}) =>{
    if(!video) return (
        <div>Loading...</div>
    )
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`

    return(
       <React.Fragment>
           <Paper elevation={6}>
                <iFrame frameBorder="0" height="350" width="100%" title="Video Player" src={videoSrc}/>
            </Paper> 
          
           <Paper elevation={6} style={{height:'40vh'}}>
                <Typography variant="h6">{video.snippet.title}   {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
           </Paper>
       </React.Fragment>
    )
}


export default VideoDetail;