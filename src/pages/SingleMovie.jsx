import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsMovie from '../components/ReviewsMovie';

export default function SingleMovie() {
    const { id } = useParams();

    const api_server_url = 'http://localhost:3000/api/movies';
    const [movie, setMovie] = useState([]);

    const imageUrl = movie.image ? `/public/${movie.image}` : '/public/default-movie.jpg';

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`${api_server_url}/${id}`);
                const data = await response.json();
                setMovie(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchMovie();
    }, [id]);

    return (
        <>
            <div className="container text-center my-5">
                <div className="row justify-content-center">
                    <h1 className='mb-3'>{movie.title}</h1>
                    <div className="col-md-3">
                        <img src={imageUrl} alt='' className="img-fluid" />
                    </div>
                    <div className="col-md-3 text-start">
                        <p><strong>Release Year:</strong> {movie.release_year}</p>
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Genre:</strong> {movie.genre}</p>
                        <p><strong>Plot:</strong> {movie.abstract}</p>
                    </div>
                </div>
            </div>
            <ReviewsMovie reviews={movie.reviews} />
        </>
    );
}