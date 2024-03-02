import request from '../utils/request';
import {
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
