import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import SingleMovie from './pages/SingleMovie';

import './index.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

