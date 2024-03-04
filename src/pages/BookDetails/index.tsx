import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../../api/books';
import { BookItem } from '../../interfaces/books.interface';
import { FlexColumn } from '../../components/UI/Flex';
import BookCard from '../../components/BookCard';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LocalStorageKeys } from '../../constants/localStorageKeys';

const DetailedView = () => {
  const { id } = useParams();
  const [isFetching, setFetching] = useState(false);
  const [bookDetails, setBookDetails] = useState<BookItem>();
  const [favoriteBooks, setFavoriteBooks] = useLocalStorage<string[]>(
    LocalStorageKeys.FAVORITE_BOOKS,
    [],
  );

  const fetchBookDetails = async (volumeId: string) => {
    try {
      setFetching(true);
      const { data } = await getBookDetails(volumeId);
      setBookDetails(data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      alert(
        'There was an error while fetching book detailed info. Please try again.',
      );
    } finally {
      setFetching(false);
    }
  };

  const isBookInFavorites = (book: BookItem) =>
    favoriteBooks?.includes(book.id);

  const addBookToFavorites = (book: BookItem) => {
    const updatedFavoriteBooks = [...favoriteBooks, book.id];
    setFavoriteBooks(updatedFavoriteBooks);
  };

  const removeBookFromFavorites = (book: BookItem) => {
    const updatedFavoriteBooks = favoriteBooks.filter(
      (id: string) => id !== book.id,
    );
    setFavoriteBooks(updatedFavoriteBooks);
  };

  const handleFavoriteClick = (book: BookItem) => {
    if (favoriteBooks?.includes(book.id)) {
      removeBookFromFavorites(book);
    } else {
      addBookToFavorites(book);
    }
  };

  useEffect(() => {
    id && fetchBookDetails(id);
  }, [id]);

  if (isFetching) {
    return <h2>Loading book details...</h2>;
  }
  return (
    <FlexColumn>
      {bookDetails ? (
        <BookCard
          book={bookDetails}
          detailed
          onFavoriteClick={handleFavoriteClick}
          isFavorite={isBookInFavorites(bookDetails)}
        />
      ) : (
        <h2>Unable to get details for provided book id</h2>
      )}
    </FlexColumn>
  );
};

export default DetailedView;
