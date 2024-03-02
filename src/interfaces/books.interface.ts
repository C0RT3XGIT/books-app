export interface BookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

export interface GetBooksParams {
  q: string;
  maxResults?: number;
  startIndex?: number;
}

export interface GetBooksResponse {
  items: BookItem[];
  kind: string;
  totalItems: number;
}
