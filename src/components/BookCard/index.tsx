import { BookItem } from '../../interfaces/books.interface';
import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../UI/Flex';

interface BookCardProps {
  book: BookItem;
  detailed?: boolean;
}

const Card = styled(FlexColumn)<{ $detailed?: boolean }>`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: ${({ $detailed }) =>
    $detailed ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.1);'};
  width: 350px;
  cursor: ${({ $detailed }) => ($detailed ? 'default' : 'pointer')};
  text-overflow: ellipsis;
`;

const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.h3`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-bottom: 0.4em;
  margin-bottom: 10px;
`;

const CardSubtitle = styled.h4`
  color: #666;
`;

const BookCard = ({ book, detailed }: BookCardProps) => {
  return (
    <Card $detailed={detailed}>
      <CardTitle>{book.volumeInfo.title}</CardTitle>
      <CardSubtitle>{book.volumeInfo.subtitle}</CardSubtitle>
      <CardImage
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
    </Card>
  );
};

export default BookCard;
