import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import GameIndexPage from '../GameIndexPage/GameIndexPage'
import { getUser } from '../../utilities/users-service';
import GameDetailPage from '../GameDetailPage/GameDetailPage';
import UserPage from '../UserPage/UserPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/index" element={<GameIndexPage />} />
            <Route path="/index/:id" element={<GameDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/*" element={<Navigate to="/index"/>} /> 
          </Routes>
        </>
          :
          <AuthPage setUser = {setUser} />
      }
    </main>
  );
}
