import logo from './logo.svg';
import './App.css';
import Llibre from './component/llibre.json';
import Book from './component/book';


function App() {

  const libros = Llibre.map( (e) => <Book key={e.id} title={e.title} author={e.author}/>);

  return (
    <div className="App">

      {libros}
      
    </div>
  );
}

export default App;
