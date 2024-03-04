import { BookItem } from '../../interfaces/books.interface';
import React from 'react';
import styled from 'styled-components';
import { Flex, FlexColumn } from '../UI/Flex';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

interface BookCardProps {
  book: BookItem;
  detailed?: boolean;
  isFavorite?: boolean;
  onFavoriteClick?: (book: BookItem) => void;
  onCardClick?: (book: BookItem) => void;
}

const Card = styled(FlexColumn)<{ $detailed?: boolean }>`
  justify-content: space-between;
  gap: 10px;
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
`;

const CardSubtitle = styled.h4`
  color: #666;
`;

const CardFooter = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const BookCard = ({
  book,
  detailed,
  isFavorite,
  onFavoriteClick,
  onCardClick,
}: BookCardProps) => {
  return (
    <Card $detailed={detailed}>
      <FlexColumn $gap={10} onClick={() => onCardClick?.(book)}>
        <CardTitle>{book.volumeInfo.title}</CardTitle>
        <CardSubtitle>{book.volumeInfo.subtitle}</CardSubtitle>
        <CardImage
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
        />
      </FlexColumn>
      {detailed && (
        <CardFooter onClick={() => onFavoriteClick?.(book)}>
          <CardSubtitle>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </CardSubtitle>
          <StarIcon />
        </CardFooter>
      )}
    </Card>
  );
};

export default BookCard;
