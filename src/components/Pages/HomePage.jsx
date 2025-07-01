import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () => {

    let movies = useSelector(store => store.movieStore.movies)

    let dispatch = useDispatch()

    useEffect(() => {
        // console.log(movies)

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

    return (
        <div>HomePage</div>
    )
}

export default HomePage