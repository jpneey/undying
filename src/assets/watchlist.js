export const watchlistKey = 'undyinglist';

export const getMovies = () => {
    var Movies = localStorage.getItem( watchlistKey );
    if ( Movies ) { return JSON.parse( Movies ); }
    return [];
}

export const addMovie = ( slug ) => {
    var Movies = getMovies();
    Movies.push( slug );
    var Movies_ = [...new Set(Movies)];
    localStorage.setItem( watchlistKey, JSON.stringify( Movies_ ) ); 
    return [slug, getMovies()]
}

export const removeMovie = ( slug ) => {
    var Movies = getMovies();
    Movies = Movies.filter(function(i){ return i!==slug })
    var Movies_ = [...new Set(Movies)];
    localStorage.setItem( watchlistKey, JSON.stringify( Movies_ ) ); 
    return [slug, getMovies()]
}

export const isInMovie = ( slug ) => {
    var Movies = getMovies();
    if ( !Movies ) { return false; }
    return Movies.includes( slug );
}