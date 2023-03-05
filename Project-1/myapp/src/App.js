
import './App.css';
import Curd from './components/Curd';
import Hook from './components/Hook';
import List from './components/List';

function App() {

  const name ="React js ";
  return (
    <div className="App">
      <h1> {name} </h1>
      <Curd />
    </div>
  );
}

export default App;
