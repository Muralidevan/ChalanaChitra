const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
  };
  
  
  const postReducer = (state=initialState, action) => {
    switch (action.type) {
      case "GET_MOVIES":
        return {
          ...state,
          loading: true,
          movies: action.payload
        };
        case "TRENDING_MOVIES":
            return {
              ...state,
              loading: true,
              movies: action.payload
            };
      case "POPULAR_MOVIES":
                return {
                  ...state,
                  loading: true,
                  movies: action.payload
                };
         case "UPCOMING_MOVIES":
                    return {
                      ...state,
                      loading: true,
                      movies: action.payload
                    };
      case "SEARCH_MOVIES_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: action.payload
        };
    //   case "SEARCH_MOVIES_FAILURE":
    //     return {
    //       ...state,
    //       loading: false,
    //       errorMessage: action.error
    //     };
     default: {
			return {
				...state,
			}
		}
  }
}

  export default postReducer