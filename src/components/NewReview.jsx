export default function NewReview() {
    return (
        <form className="container g-3">
            <div className="col-12 d-flex flex-column align-items-center">
                <div className="mb-3 w-100">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        className="form-control"
                        placeholder="Write your name"
                        aria-describedby=""
                    />
                    <small id="helpId" className="text-muted"></small>
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input
                        type="text"
                        name="vote"
                        id="vote"
                        className="form-control"
                        placeholder="Give a vote from 1 to 5"
                        aria-describedby=""
                    />
                    <small id="helpId" className="text-muted"></small>
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="review" className="form-label">Review</label>
                    <input
                        type="text"
                        name="review"
                        id="review"
                        className="form-control"
                        placeholder="Write your review"
                        aria-describedby=""
                    />
                    <small id="helpId" className="text-muted"></small>
                </div>
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </div>
        </form>
    )
}