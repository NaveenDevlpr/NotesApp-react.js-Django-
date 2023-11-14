import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import { Routes,Route, Router } from 'react-router-dom';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <div className="container dark">
      <div className='app'>
          <Header/>
          <Routes>
            <Route path='/' element={<NotesListPage/>}/>
            <Route path='/notes/:id' element={<NotesPage/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
