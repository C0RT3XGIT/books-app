import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LocalStorageKeys } from '../../constants/localStorageKeys';
import { BookItem } from '../../interfaces/books.interface';
import { getBookDetails } from '../../api/books';
import BookGridList from '../../components/BookGridList';
import { useNavigate } from 'react-router-dom';
import { APP_PATHS } from '../../constants/appPaths';

const Favorites = () => {
  const navigate = useNavigate();
  const [favoriteBooks] = useLocalStorage<string[]>(
    LocalStorageKeys.FAVORITE_BOOKS,
    [],
  );
  const [books, setBooks] = useState<BookItem[]>([]);
  const [isFetching, setFetching] = useState<boolean>(false);

  const fetchFavoriteBooks = async () => {
    const promises = favoriteBooks.map((id) => getBookDetails(id));
    try {
      setFetching(true);
      const results = await Promise.all(promises);
      const data = results.map((res) => res.data);
      setBooks(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      alert(
        'There was an error while fetching favorite books. Please try again.',
      );
    } finally {
      setFetching(false);
    }
  };

  const handleCardClick = (book: BookItem) => {
    navigate(`${APP_PATHS.BOOKS}/${book.id}`);
  };
  useEffect(() => {
    favoriteBooks && fetchFavoriteBooks();
  }, [favoriteBooks]);
  return (
    <div>
      <h1>Favorites</h1>
      {isFetching ? (
        <h2>Loading favorite books...</h2>
      ) : (
        <BookGridList books={books} onCardClick={handleCardClick} />
      )}
    </div>
  );
};

export default Favorites;
