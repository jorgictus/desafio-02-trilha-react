import { MovieCard } from "./MovieCard"


type MoviesProps = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

type SelectedGenreProps = {
  movies : MoviesProps[],
  selectedGenre: {
    title : string
  }
}

export function Content({movies, selectedGenre} : SelectedGenreProps) {
  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  
  
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )

}