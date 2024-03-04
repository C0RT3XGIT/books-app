import BookCard from '../BookCard';
import React from 'react';
import styled from 'styled-components';
import { Flex, FlexColumn } from '../UI/Flex';
import { BookItem } from '../../interfaces/books.interface';

interface BookGridListProps {
  books: BookItem[];
  onCardClick: (book: BookItem) => void;
}

const CardsContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const BookGridList = ({ books, onCardClick }: BookGridListProps) => {
  return (
    <FlexColumn>
      {books?.length > 0 ? (
        <CardsContainer>
          {books.map((book) => (
            <BookCard book={book} key={book.id} onCardClick={onCardClick} />
          ))}
        </CardsContainer>
      ) : (
        <h2>No books found</h2>
      )}
    </FlexColumn>
  );
};

export default BookGridList;
