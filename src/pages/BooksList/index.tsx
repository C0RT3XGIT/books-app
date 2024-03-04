import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '../../api/books';
import { BookItem } from '../../interfaces/books.interface';
import { FlexColumn } from '../../components/UI/Flex';
import BookGridList from '../../components/BookGridList';
import { useDebounce } from '../../hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { APP_PATHS } from '../../constants/appPaths';
import { QueryParams } from '../../constants/queryParams';

const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
`;

const Header = styled(FlexColumn)`
  border-bottom: 1px solid #ccc;
  gap: 10px;
  margin-bottom: 20px;
`;

const BooksList = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<BookItem[]>([]);
  const [isFetching, setFetching] = useState<boolean>(false);

  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const searchQueryParam = currentQueryParameters.get(QueryParams.SEARCH);
  const [searchQuery, setSearchQuery] = useState<string>(
    searchQueryParam || '',
  );
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const fetchBooks = async (query: string) => {
    try {
      setFetching(true);
      const { data } = await getBooks({ q: query });
      setBooks(data.items);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      alert('There was an error while fetching books. Please try again.');
    } finally {
      setFetching(false);
    }
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    const newSearchParams = new URLSearchParams(currentQueryParameters);
    newSearchParams.set(QueryParams.SEARCH, value);
    setSearchParams(newSearchParams);
    setSearchQuery(event.target.value);
  };

  const handleCardClick = (book: BookItem) => {
    navigate(`${APP_PATHS.BOOKS}/${book.id}`);
  };

  useEffect(() => {
    debouncedSearchQuery && fetchBooks(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  return (
    <FlexColumn>
      <Header>
        <h1>Search </h1>
        <SearchInput
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder='Type book name...'
        />
      </Header>
      {isFetching ? (
        <h2>Loading books...</h2>
      ) : (
        <BookGridList books={books} onCardClick={handleCardClick} />
      )}
    </FlexColumn>
  );
};

export default BooksList;
