import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import Searchbook from './components/Searchbook';
import Deletebook from './components/Deletebook';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddBook />} />
    <Route path="/delete" element={<Deletebook />} />
    <Route path="/search" element={<Searchbook />} />
    <Route path="/viewall" element={<ViewAll />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
