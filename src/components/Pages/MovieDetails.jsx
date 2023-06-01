import { Outlet } from "react-router-dom";
import MovieDetailsCard from "components/MovieCard/MovieCard";

const MovieDetails = () => {
    return (
      
        <MovieDetailsCard>
            <Outlet/>
        </MovieDetailsCard>
      
    );
  };
  
  export default Movies;
  