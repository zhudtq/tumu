import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
          标题
      </div>
      <div className="body">
        <button onClick={clickMe}>
          点击我
        </button>
      </div>
    </div>
  );
}

function clickMe() {
  console.log('nicky 我被点了')
}

export default App;
