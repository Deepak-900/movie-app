import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const MovieDetailsPage = () => {
    let { id } = useParams();
    const movieStore = useSelector((state) => state.movieStore);
    const movie = movieStore.movies.find(item => item.id === id);
    const { cart_items } = useSelector(store => store.cartStore)

    if (!movie) {
        return <div className="container py-5 text-center">Movie not found</div>;
    }

    // Helper functions
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const dispatch = useDispatch();

    const handleSubmit = () => {

        // check if movie is already added
        let itemExists = cart_items.find(item => item.title == movie.primaryTitle)

        if (itemExists) {
            Swal.fire('Attention!', 'Movie already in cart', 'warning')
        }
        else {
            let cart_item = {
                // ...movie, //move, to take all the fields from movie
                id: Date.now(),
                title: movie.primaryTitle,
                image: movie.primaryImage,
                genres: movie.genres,
                releaseDate: movie.releaseDate,
                contentRating: movie.contentRating,
                no_of_days: 7,
                price: 70
            }
            dispatch({ type: "ADD_TO_CART", payload: cart_item })
            Swal.fire('Congrats!', 'Your movie added to cart_item.', 'success')
        }


    }

    return (
        <div className="bg-light">
            {/* Bootstrap Icons CSS */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />

            {/* Hero Section */}
            <section className="position-relative mb-5">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
                <img
                    src={movie.primaryImage}
                    alt={movie.primaryTitle}
                    className="w-100"
                    style={{ height: '60vh', objectFit: 'cover' }}
                />

                <div className="container position-relative" style={{ marginTop: '-100px', zIndex: 2 }}>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card shadow-lg border-0 overflow-hidden">
                                <img
                                    src={movie.primaryImage}
                                    alt={movie.primaryTitle}
                                    className="img-fluid w-100"
                                    style={{ height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="col-md-8 text-white">
                            <h1 className="display-4 fw-bold mb-3">{movie.primaryTitle}</h1>

                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <span className="badge bg-warning text-dark px-3 py-2 fs-6">
                                    <i className="bi bi-star-fill me-1"></i> {movie.averageRating}/10
                                </span>
                                <span className="badge bg-primary px-3 py-2 fs-6">{movie.contentRating}</span>
                                <span className="badge bg-secondary px-3 py-2 fs-6">{formatRuntime(movie.runtimeMinutes)}</span>
                                <span className="badge bg-success px-3 py-2 fs-6">{movie.releaseDate}</span>
                            </div>

                            <p className="lead mb-4">{movie.description}</p>

                            <div className="d-flex gap-3">
                                <a
                                    href={movie.trailer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-danger btn-lg px-4"
                                >
                                    <i className="bi bi-play-fill me-2"></i> Watch Trailer
                                </a>
                                <a
                                    href={movie.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light btn-lg px-4"
                                >
                                    <i className="bi bi-film me-2"></i> IMDb Page
                                </a>
                                <a

                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light btn-lg px-4"

                                    onClick={handleSubmit}
                                >
                                    <i className="bi bi-film me-2"></i> Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-8">
                        {/* Movie Details Card */}
                        <section className="card shadow-sm border-0 mb-4">
                            <div className="card-body">
                                <h2 className="h4 mb-4 d-flex align-items-center">
                                    <i className="bi bi-info-circle-fill text-primary me-2 fs-4"></i>
                                    Movie Details
                                </h2>

                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-calendar text-muted me-2 mt-1"></i>
                                                <div>
                                                    <strong>Release Date:</strong> {movie.releaseDate}
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-film text-muted me-2 mt-1"></i>
                                                <div>
                                                    <strong>Runtime:</strong> {formatRuntime(movie.runtimeMinutes)}
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-globe text-muted me-2 mt-1"></i>
                                                <div>
                                                    <strong>Countries:</strong> {movie.countriesOfOrigin.join(', ')}
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-translate text-muted me-2 mt-1"></i>
                                                <div>
                                                    <strong>Languages:</strong> {movie.spokenLanguages.join(', ')}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-cash-stack text-muted me-2 mt-1"></i>
                                                <div>
                                                    <strong>Budget:</strong> {formatCurrency(movie.budget)}
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-graph-up text-muted me-2 mt-1"></i>
                                                <div>
                                                    <strong>Gross Worldwide:</strong> {formatCurrency(movie.grossWorldwide)}
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-award text-muted me-2 mt-1"></i>
                                                <div>
                                                    <strong>Metascore:</strong> {movie.metascore}
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-people text-muted me-2 mt-1"></i>
                                                <div>
                                                    <strong>Votes:</strong> {movie.numVotes.toLocaleString()}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Genres & Themes */}
                        <section className="card shadow-sm border-0 mb-4">
                            <div className="card-body">
                                <h2 className="h4 mb-4 d-flex align-items-center">
                                    <i className="bi bi-tags-fill text-primary me-2 fs-4"></i>
                                    Genres & Themes
                                </h2>
                                <div className="d-flex flex-wrap gap-2">
                                    {movie.genres.map((genre, index) => (
                                        <span key={index} className="badge bg-primary py-2 px-3">{genre}</span>
                                    ))}
                                    {movie.interests.map((interest, index) => (
                                        <span key={index} className="badge bg-secondary py-2 px-3">{interest}</span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="col-lg-4">
                        {/* Rating Card */}
                        <section className="card shadow-sm border-0 mb-4">
                            <div className="card-body text-center">
                                <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-3"
                                    style={{ width: '100px', height: '100px' }}>
                                    <span className="display-4 fw-bold">{movie.averageRating}</span>
                                </div>
                                <h3 className="h5 mb-3">IMDb Rating</h3>
                                <div className="d-flex justify-content-center mb-3 text-warning">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill fs-4 mx-1"></i>
                                    ))}
                                </div>
                                <p className="text-muted">{movie.numVotes.toLocaleString()} votes</p>
                            </div>
                        </section>

                        {/* Quick Facts */}
                        <section className="card shadow-sm border-0 mb-4">
                            <div className="card-body">
                                <h2 className="h4 mb-4 d-flex align-items-center">
                                    <i className="bi bi-lightning-fill text-primary me-2 fs-4"></i>
                                    Quick Facts
                                </h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="d-flex align-items-center">
                                            <i className="bi bi-calendar-check text-muted me-2"></i>
                                            Year
                                        </span>
                                        <span className="badge bg-dark rounded-pill">{movie.startYear}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="d-flex align-items-center">
                                            <i className="bi bi-film text-muted me-2"></i>
                                            Runtime
                                        </span>
                                        <span className="badge bg-dark rounded-pill">{formatRuntime(movie.runtimeMinutes)}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="d-flex align-items-center">
                                            <i className="bi bi-person-check text-muted me-2"></i>
                                            Rating
                                        </span>
                                        <span className="badge bg-dark rounded-pill">{movie.contentRating}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="d-flex align-items-center">
                                            <i className="bi bi-currency-dollar text-muted me-2"></i>
                                            Budget
                                        </span>
                                        <span className="badge bg-dark rounded-pill">{formatCurrency(movie.budget)}</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* External Links */}
                        <section className="card shadow-sm border-0">
                            <div className="card-body">
                                <h2 className="h4 mb-4 d-flex align-items-center">
                                    <i className="bi bi-box-arrow-up-right text-primary me-2 fs-4"></i>
                                    External Links
                                </h2>
                                <div className="d-grid gap-2">
                                    <a
                                        href={movie.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                                    >
                                        <i className="bi bi-film me-2"></i> IMDb Page
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                                    >
                                        <i className="bi bi-facebook me-2"></i> Facebook
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                                    >
                                        <i className="bi bi-globe me-2"></i> Official Site
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Back Button */}
            <div className="container mb-5 pb-5">
                <Link to="/" className="btn btn-outline-secondary">
                    <i className="bi bi-arrow-left me-2"></i> Back to Movies
                </Link>
            </div>
        </div>
    );
};

export default MovieDetailsPage;