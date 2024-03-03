import { BookItem } from '../../interfaces/books.interface';
import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../UI/Flex';

const Card = styled(FlexColumn)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
`;

const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

const BookCard = ({ book }: { book: BookItem }) => {
  return (
    <Card>
      <CardTitle>{book.volumeInfo.title}</CardTitle>
      <CardImage
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
    </Card>
  );
};

export default BookCard;
