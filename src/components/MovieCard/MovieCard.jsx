import { fetchDetails } from "api/api";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState,  useEffect} from "react";
import css from './MovieCard.module.css'


const MovieDetails = () => {
    const {movieId} = useParams()
    const [movieDetails, setMovieDetails] = useState({});
  
    useEffect(() => {
      const fetchMovieDetails = async id => {
        try {
          const details = await fetchDetails(id);
          setMovieDetails(details.data);
          console.log(details.data);
        } catch (error) {
          console.log('Error');
        }
      };
      fetchMovieDetails(movieId);
    }, [movieId]);


    const {poster_path, title, popularity, overview, genres} = movieDetails
return(

<container className={css.container}>
<button type='button' className={css.button}>Go back</button>
    <section className={css.section__poster}>
<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width={250}/>
<div className={css.description}>
<h1>{title}</h1>
<p>User Srtore: {
popularity
// .toFixed()
}</p>
<h3>Overview</h3>
<p>{overview}</p>
<h3>Genres</h3>
<ul className={css.list}>
{/* {genres.map(({id, name}) => (
    <li key={id} className={css.item}>{name}</li>
))} */}
</ul>
</div>
</section>
<section className={css.section__link}>
<p>Additoonal information</p>
<ul>
    <li className={css.link}><Link>Cast</Link></li>
    <li className={css.link}><Link>Reviews</Link></li>
</ul>
</section>
</container>

)




}

export default MovieDetails;