export const GetMovies = (movies) => {
	return { type: 'GET_MOVIES', payload: movies }
}
export const TrendingMovies = (movies) => {
	return { type: 'TRENDING_MOVIES', payload: movies }
}
export const PopularMovies = (movies) => {
	return { type: 'POPULAR_MOVIES', payload: movies }
}
export const UpcomingMovies = (movies) => {
	return { type: 'UPCOMING_MOVIES', payload: movies }
}
export const SearchMovies = (movies) => {
	return { type: 'SEARCH_MOVIES_SUCCESS', payload: movies }
}


export const getmovies = () =>{
    return(dispatch)=>{
        async function fetchData(){
            const movies_api = 'https://api.themoviedb.org/3/list/10?api_key=489c8ba4fe375bc60d35b4e889cad892&language=en-US'
            try{
                const response = await fetch(movies_api)
                const data = await response.json()
               // console.log(data,"movies")
                dispatch(GetMovies(data.items))
              //  setMovies(data.items)
    
            }
            catch(err){
                console.error(err)
            }

        }
        fetchData()
    }
}
export const trendingmovies = () =>{
    return(dispatch)=>{
        async function fetchData(){
            const movies_api = 'https://api.themoviedb.org/3/trending/all/day?api_key=489c8ba4fe375bc60d35b4e889cad892'
            try{
                const response = await fetch(movies_api)
                const data = await response.json()
               // console.log(data,"trendingmovies")
                dispatch(TrendingMovies(data.results))
              //  setMovies(data.items)
    
            }
            catch(err){
                console.error(err)
            }

        }
        fetchData()
    }
}
export const popularmovies = () =>{
    return(dispatch)=>{
        async function fetchData(){
            const movies_api = 'https://api.themoviedb.org/3/movie/popular?api_key=489c8ba4fe375bc60d35b4e889cad892&language=en-US&page=1'
            try{
                const response = await fetch(movies_api)
                const data = await response.json()
               // console.log(data,"popularmovies")
                dispatch(PopularMovies(data.results))
              //  setMovies(data.items)
    
            }
            catch(err){
                console.error(err)
            }

        }
        fetchData()
    }
}
export const upcomingmovies = () =>{
    return(dispatch)=>{
        async function fetchData(){
            const movies_api = ' https://api.themoviedb.org/3/movie/upcoming?api_key=489c8ba4fe375bc60d35b4e889cad892&language=en-US&page=1'
            try{
                const response = await fetch(movies_api)
                const data = await response.json()
               // console.log(data,"popularmovies")
                dispatch(UpcomingMovies(data.results))
              //  setMovies(data.items)
    
            }
            catch(err){
                console.error(err)
            }

        }
        fetchData()
    }
}

export const searchmovies = (query)=>{
    return(dispatch)=>{
        async function fetchSearchData(){
            const url = `https://api.themoviedb.org/3/search/movie?api_key=489c8ba4fe375bc60d35b4e889cad892&language=en-US&query=${query}&page=1&include_adult=false`;
            try {
                const response = await fetch(url);
                const data  = await response.json();
                // console.log(data,"in post action");
               // setMovies(data.results);
               
                   
                dispatch(SearchMovies(data.results))
               
              
    
               // console.log("movies",movies)
            }catch(err){
                alert('Not Found')
                console.error(err);
            }
        }
        fetchSearchData()
       

    }
}