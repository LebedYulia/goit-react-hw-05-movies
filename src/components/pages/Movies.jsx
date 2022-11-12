import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getImageByQuery } from 'components/services/Api';
import { MoviesList } from 'components/MoviesList';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState();
  const [search, setSearchParams] = useSearchParams();
  

  const handleSearchFormSubmit = ({ inputValue }) => {
    if (inputValue === searchQuery) {
      return;
    }
    setSearchQuery(inputValue);
    setSearchParams({search: inputValue});
  };

  const searchValue = search.get('search') ?? ""; 
  

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }    

    async function onSearch() {
      try {
        const data = await getImageByQuery(searchQuery);
        if (data.length === 0) {
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        setMovies([...data]);
      } catch (error) {
        toast.error('Something went wrong. Try again.');
      }
    }

    onSearch();
  }, [searchQuery]);

  return (
    <>
      <SearchForm searchValue = {searchValue} onSubmit={handleSearchFormSubmit} />
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <MoviesList key={id} title={title} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};
