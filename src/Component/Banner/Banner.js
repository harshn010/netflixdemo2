import React, { useState,useEffect } from 'react'
import './Banner.css'
import axios from '../../Static/Axios'  
import {API_KEY} from '../../Static/Static'
import {img_url} from '../../Static/Static'
import YouTube from 'react-youtube'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
function Banner() {
  const [movie,setMovie] = useState()
  const [Url,setUrl] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 useEffect(() => {
    axios.get(`/trending/all/day?api_key=${API_KEY}`).then((Response)=>{
      console.log(Response.data.results[0])
     setMovie(Response.data.results[1]) 
     var i=0;
     setInterval(function () {
       setMovie(Response.data.results[i])
       i++;
       if(i==10){
         i=0;
       }
     }, 6000);
    }) 

  
  }, [])
  const getMovie=(id)=>{
    console.log(id)
    console.log("clicked")
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
   console.log(response.data.results[0].key)
   setUrl(response.data.results[0].key)
   handleOpen()
 
    })
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
  return (
    <div  className="banner" style={{backgroundImage:`url(${movie?img_url+movie.backdrop_path:""})`}}>
       <div className='buttons'>
       
          <button  className='button' onClick={()=>getMovie(movie.id)}>Play</button>
          <button className='button' >MyList</button>
        </div> 
        
        <h1 className='name'>{movie ? movie.title : ""}</h1>
        <p className='disc'>{movie ? movie.overview : ""}</p>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {Url && <YouTube videoId={Url} opts={opts}/>}
          </Typography>
        </Box>
      </Modal>
    </div>
    
  )
  
}

export default Banner
