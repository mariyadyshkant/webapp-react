import { useState, useEffect } from 'react';
import CardMovie from '../components/CardMovie';

export default function HomePage() {

    const api_server_url = 'http://localhost:3000/api/movies';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(api_server_url);
            const data = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <>
            <div>
                <h1>Home Page</h1>
                <div className="container">
                    <div className="row">
                        {movies.map((movie, index) => (
                            <div className="col-md-4" key={movie.id ? movie.id : `movie-${index}`}>
                                <CardMovie movie={movie} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
