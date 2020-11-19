import React from 'react'

const Movie=({movie})=> {
  //  console.log(movie,"movie")
   
    return (

     
       
         
            <div className="card" >
              
               <img className="img" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}  alt={movie.title + ' Poster Not Found'}/>
            <h2 className="card-title">{movie.title}</h2>
        <p className="card-list"><small>RELEASE DATE: {movie.release_date}</small></p>
        <p className="card-list"><small>RATINGS: {movie.vote_average}</small></p>
        <p className="card-list"> Overview: <br/>{movie.overview}</p>
        
            
            
       </div>
      
            
                
           
       
       
    )
}

export default Movie
