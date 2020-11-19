import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import {getmovies,searchmovies,trendingmovies,popularmovies,upcomingmovies} from '../actions/postAction'

const SearchMovies = ({trendingmovies,getmovies,searchmovies,popularmovies,upcomingmovies,movieslist:{movies}})=>{
   
    const [query, setQuery] = useState("");
    // const [movies,setMovies] = useState([]);
    // console.log(movies,"movielist")

    const handleChange =(e)=>{
        setQuery(e.target.value)

    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        searchmovies(query)    
    }
     
    useEffect(()=>{
        getmovies()
        
     },[getmovies])
return(
    <>
        <h1 className="header">Search Your Favourite Movies</h1>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-grp">
            <label htmlFor="query" className="label">Movie Name:</label>
            <input  className="input" type="search" name="query" placeholder="i.e.The Dark Knight" value={query} onChange={handleChange} required/>
            <button className="button" type="submit">Search</button>
            </div>
            
        </form>

        <button className="button"  onClick={()=>getmovies()}>Top Rated Movies</button>
        <button className="button"  onClick={()=>trendingmovies()}>Trending Movies</button>
        <button className="button"  onClick={()=>{popularmovies()}}>Popular Movies</button>
        <button className="button"  onClick={()=>{upcomingmovies()}}>Upcoming Movies</button>


        {/* filter(movie=>movie.poster_path) */}
        {movies.length!==0?   movies.map((movie)=>{
            return(                             
                    <Movie movie={movie} key={movie.id} /> 
                
             ) }):<h1> No Matches Found</h1>}               
    </>    
)
}

const mapStateToProps = (state) => {
	return {
		movieslist: state.movies,
	}
}

export default connect(mapStateToProps,{getmovies,searchmovies,trendingmovies,popularmovies,upcomingmovies})(SearchMovies)