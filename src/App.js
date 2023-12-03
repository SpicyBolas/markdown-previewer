import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="window editor">
        <div className="header">

        </div>
        <div className="ed-wrap">
          <textarea id="editor">

          </textarea>
        </div>
      </div>
      <div className="window preview">
        <div className="header">

        </div>
        <div id="preview">

        </div>
      </div>
    </div>
  );
}

export default App;
