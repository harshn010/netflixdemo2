import './Card.css'
import React, { useState,useEffect } from 'react'
import { API_KEY } from '../../Static/Static'
import axios from '../../Static/Axios'  
import {img_url} from '../../Static/Static'
import YouTube from 'react-youtube'
function Card(props){
    
    const [movie,setMovie] = useState([])
    const [Url,setUrl] = useState('')
    useEffect(() => {
        axios.get(props.url ).then((response)=>{
          console.log(response.data.results)
          console.log(response.data.results)
         setMovie(response.data.results) 
        }) 
      
      },[])
      const getId=(id)=>{
          console.log(id)
          console.log("clicked")
          axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
         console.log(response.data.results[0].key)
         setUrl(response.data.results[0].key)
         
       
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
    return(
        <div className='row'>
       <h1 className='title'>{props.title}</h1>
       
         <div className='post'>
       
        {
            movie.map((obj)=>{
                        return(
                            <img onClick={()=>getId(obj.id)} className={props.small ?  'smallposter' : 'poster' } src={movie ? `${img_url+obj.backdrop_path}  ` : "" }  />
                        )
            })
        }
       
         </div>
         {Url && <YouTube videoId={Url} opts={opts}/>}
        </div>
    )
}
export default Card