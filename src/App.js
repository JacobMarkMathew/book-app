import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import Searchbook from './components/Searchbook';
import Deletebook from './components/Deletebook';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddBook />
      <Searchbook />
      <Deletebook />
      <ViewAll />
    </div>
  );
}

export default App;
