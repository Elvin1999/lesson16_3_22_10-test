import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';

function App() {
  return (
    <div className="App">
     <Button onClick={()=>alert('Hello')}>Click Me Hey</Button>
    </div>
  );
}

export default App;
