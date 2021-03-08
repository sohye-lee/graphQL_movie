import { getMovieDetails, getMovies, getSuggestions } from './db.js';

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, {id}) => getMovieDetails(id),
        suggestions: (_, {id}) => getSuggestions(id)
    },

};

export default resolvers;