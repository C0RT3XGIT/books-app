import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { APP_PATHS } from './constants/appPaths';

const Favorites = lazy(() => import('./pages/Favorites'));
const BooksList = lazy(() => import('./pages/BooksList'));
const BookDetails = lazy(() => import('./pages/BookDetails'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={APP_PATHS.BOOKS} element={<Layout />}>
            <Route index element={<BooksList />} />
            <Route path={APP_PATHS.BOOK_DETAILED} element={<BookDetails />} />
            <Route path={APP_PATHS.FAVORITES} element={<Favorites />} />
          </Route>
          <Route path='*' element={<Navigate to={APP_PATHS.BOOKS} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
