import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '../../api/books';
import { BookItem } from '../../interfaces/books.interface';
import { FlexColumn } from '../../components/UI/Flex';
import BookGridList from '../../components/BookGridList';

const PageWrapper = styled(FlexColumn)`
  padding: 0 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
`;

const Header = styled(FlexColumn)`
  border-bottom: 1px solid #ccc;
  gap: 10px;
  margin-bottom: 20px;
`;

const Main = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const [books, setBooks] = useState<BookItem[]>([]);
  const [isFetching, setFetching] = useState<boolean>(false);

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
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    searchQuery && fetchBooks(searchQuery);
  }, [searchQuery]);

  return (
    <PageWrapper>
      <Header>
        <h1>Search </h1>
        <SearchInput onChange={handleSearchQueryChange} />
      </Header>
      {isFetching ? <h2>Loading books...</h2> : <BookGridList books={books} />}
    </PageWrapper>
  );
};

export default Main;
