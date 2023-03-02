import React from 'react'
import { useState ,useEffect} from 'react'
import instance from '../baseUrl'
import './Banner.css'

function banner() {
    const [movie,setMovies]=useState([])

    async function fetchData(){
        const result = await instance.get(fetchUrl)
        console.log(result.data.results);
        setMovies(result.data.results[Math.floor(Math.random()*result.data.results.length-1)])
    }
    useEffect(()=>{
        fetchData();
    },[])
    const base_url = "https://image.tmdb.org/t/p/original/";
    console.log(movie);
    
  return (
    <div className='banner' style={{
        backgroundImage:`url(${base_url}${movie.backdrop_path})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }}>


    </div>
  )
}

export default banner