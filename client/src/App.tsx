import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { UserHomePage } from './pages/UserHomePage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { UserListPage } from './pages/UserListPage';


function App() {
  return (
    <div className="App">
          <Routes>
                <Route path='/' element={<UserListPage />} />
                <Route path='userhomepage' element={<UserHomePage />} />
                <Route path='moviedetailspage/:movieId' element={<MovieDetailsPage />} />
          </Routes>
    </div>
  );
}

export default App;
