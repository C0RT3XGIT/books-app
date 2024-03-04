import BookCard from '../BookCard';
import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../UI/Flex';
import { BookItem } from '../../interfaces/books.interface';

interface BookGridListProps {
  books: BookItem[];
  onCardClick: (book: BookItem) => void;
}

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;

  @media (min-width: 1680px) {
    grid-template-columns: repeat(4, minmax(350px, 1fr));
    gap: 20px;
  }
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
