import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const movies = useSelector(store => store.movieStore.movies)
    const [length, setLength] = useState(20)
    const dispatch = useDispatch()

    useEffect(() => {
        if (movies.length <= 0) {
            const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'e096f7af28mshfcca53b51773774p14c899jsn4f57d78b9dc7',
                    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
                }
            };

            fetch(url, options)
                .then(response => response.json())
                .then(data => dispatch({ type: "LOAD_DATA", payload: data }))
                .catch(error => console.log(error))
        }
    }, [])

    console.log(movies[0])
    return (
        <div className='container py-4'>
            {/* Add Bootstrap Icons CSS */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
            />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 mb-4">
                {movies.length > 0 && movies.slice(0, length).map((movie) => (
                    <div className="col" key={movie.id}>
                        <div className="card h-100 shadow-sm border-0 overflow-hidden hover-effect">
                            <div className="position-relative">

                                <Link
                                    to={`/movie/${movie.id}`}

                                >
                                    <img
                                        src={movie.primaryImage || 'https://via.placeholder.com/300x450?text=No+Image'}
                                        className="card-img-top"
                                        alt={movie.primaryTitle}
                                        style={{ height: '400px', objectFit: 'cover' }}
                                    />
                                </Link>

                                <div className="position-absolute top-0 end-0 bg-warning text-dark px-2 py-1 m-2 small rounded">
                                    <i className="bi bi-star-fill me-1"></i> {movie.averageRating || 'N/A'}
                                </div>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-truncate">{movie.primaryTitle}</h5>
                                <div className="d-flex align-items-center text-muted mb-2">
                                    <i className="bi bi-calendar me-2"></i>
                                    <small>{movie.releaseDate || 'Unknown'}</small>
                                </div>
                                <div className="d-flex align-items-center text-muted mb-3">
                                    <i className="bi bi-film me-2"></i>
                                    <small className="text-truncate">{movie.genres || 'Unknown'}</small>
                                </div>
                                <Link
                                    to={`/movie/${movie.id}`}
                                    className="btn btn-outline-primary mt-auto align-self-start"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center gap-3 mb-5">
                {length < movies.length ? (
                    <button
                        className="btn btn-primary d-flex align-items-center"
                        onClick={() => setLength(length + 8)}
                    >
                        <i className="bi bi-chevron-down me-2"></i> Load More
                    </button>
                ) : (
                    <button className="btn btn-success" disabled>
                        All Movies Loaded
                    </button>
                )}

                {length > 20 && (
                    <button
                        className="btn btn-outline-secondary d-flex align-items-center"
                        onClick={() => setLength(length - 8)}
                    >
                        <i className="bi bi-chevron-up me-2"></i> Show Less
                    </button>
                )}
            </div>
        </div>
    )
}

export default HomePage