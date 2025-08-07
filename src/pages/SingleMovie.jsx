import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsMovie from '../components/ReviewsMovie';
import NewReview from '../components/NewReview';

export default function SingleMovie() {
    const { id: movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [reviews, setReviews] = useState([]);
    const imageUrl = movie.image ? `/public/${movie.image}` : '/public/default-movie.jpg';

    const api_server_url = 'http://localhost:3000/api/movies';



    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`${api_server_url}/${movieId}`);
                const data = await response.json();
                setMovie(data);
                setReviews(data.reviews || []);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMovie();
    }, [movieId, api_server_url]);

    const handleAddReview = (newReview) => {
        setReviews((prevReviews) => [newReview, ...prevReviews]);
    };

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
            <ReviewsMovie reviews={reviews} />
            <div className="container d-flex  flex-column align-items-center mt-4">
                <h3 className="text-center">Add a Review</h3>
                <div className="col-6">
                    <NewReview movieId={movieId} onAddReview={handleAddReview} />
                </div>
            </div>
        </>
    );
}