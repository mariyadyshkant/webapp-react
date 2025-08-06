export default function ReviewsMovie({ reviews }) {
    // <pre>{JSON.stringify(reviews, null, 2)}</pre>
    return (
        <div className="container mt-4">
            <h3 className="text-center">Reviews</h3>
            {(reviews ?? []).map(review => (
                <div className="row justify-content-center" key={review.id}>
                    <div className="col-md-6 mb-2">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <strong>{review.name}</strong>
                                <span className="badge bg-secondary">Vote: {review.vote}</span>
                            </div>
                            <div className="card-body">
                                <figure>
                                    <blockquote className="blockquote">
                                        <p>{review.text}</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        <cite title="review text">{new Date(review.created_at).toLocaleDateString()}</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
