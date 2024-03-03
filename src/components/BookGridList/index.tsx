import BookCard from '../BookCard';
import React from 'react';
import styled from 'styled-components';
import { Flex, FlexColumn } from '../UI/Flex';
import { BookItem } from '../../interfaces/books.interface';

const CardsContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const BookGridList = ({ books }: { books: BookItem[] }) => {
  return (
    <FlexColumn>
      {books?.length > 0 ? (
        <CardsContainer>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </CardsContainer>
      ) : (
        <h2>No books found</h2>
      )}
    </FlexColumn>
  );
};

export default BookGridList;
