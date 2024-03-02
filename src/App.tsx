import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { APP_PATHS } from './constants/appPaths';

const Favorites = lazy(() => import('./pages/Favorites'));
const Main = lazy(() => import('./pages/Main'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={APP_PATHS.HOME} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={APP_PATHS.FAVORITES} element={<Favorites />} />
          </Route>
          <Route path='*' element={<Navigate to={APP_PATHS.HOME} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
