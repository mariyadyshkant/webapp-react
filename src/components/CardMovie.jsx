import { Link } from 'react-router-dom';

export default function CardMovie({ movie }) {
    const imageUrl = movie.image ? `/public/${movie.image}` : '/public/default-movie.jpg';

    return (
        <>
            <div className="card text-center">
                <img src={imageUrl} alt={movie.title} className="card-img-top" style={{ objectFit: 'cover', objectPosition: 'top', height: '300px' }} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.abstract}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </>
    );
}
