import request from '../utils/request';
import {
  GetBookDetailsResponse,
  GetBooksParams,
  GetBooksResponse,
} from '../interfaces/books.interface';
import { AxiosPromise } from 'axios';

export const getBooks = (
  params: GetBooksParams,
): AxiosPromise<GetBooksResponse> => {
  return request({
    url: '/volumes',
    method: 'get',
    params,
  });
};

export const getBookDetails = (
  id: string,
): AxiosPromise<GetBookDetailsResponse> => {
  return request({
    url: `/volumes/${id}`,
    method: 'get',
  });
};
