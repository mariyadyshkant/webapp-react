import { useState } from 'react';

export default function NewReview({ movieId, onAddReview }) {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [vote, setVote] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = { name, text, vote };
        try {
            const response = await fetch(`http://localhost:3000/api/movies/${movieId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newReview)
            });
            if (!response.ok) {
                throw new Error('Failed to add review');
            }
            const savedReview = await response.json();
            onAddReview(savedReview);
            setName('');
            setText('');
            setVote('');
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <form className="container g-3" onSubmit={handleSubmit}>
            <div className="col-12 d-flex flex-column align-items-center">
                <div className="mb-3 w-100">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        className="form-control"
                        placeholder="Write your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-describedby=""
                    />
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input
                        type="text"
                        name="vote"
                        id="vote"
                        className="form-control"
                        value={vote}
                        onChange={(e) => setVote(e.target.value)}
                        placeholder="Give a vote from 1 to 5"
                        aria-describedby=""
                    />
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="review" className="form-label">Review</label>
                    <input
                        type="text"
                        name="review"
                        id="review"
                        min='1'
                        max='5'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="form-control"
                        placeholder="Write your review"
                        aria-describedby=""
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </div>
        </form>
    )
}