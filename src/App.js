import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="ButtonGroup">
          <a
            className="E-Mail"
            href="https://www.linkedin.com/in/dennisdittmann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Button">LinkedIn</button>
          </a>
          <a
            className="E-Mail"
            href="https://github.com/dittmanndennis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Button">GitHub</button>
          </a>
        </div>
        <a
          className="E-Mail"
          href="mailto: dennis@dittmann.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          dennis@dittmann.io
        </a>
      </header>
    </div>
  );
}

export default App;
