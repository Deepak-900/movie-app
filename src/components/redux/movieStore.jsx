const initialData = {
    movies: []
}

const movieReducer = (state = initialData, action) => {
    switch (action.type) {

        case "LOAD_DATA":
            return { ...state, movies: action.payload }

        default:
            return state
    }
}
export default movieReducer