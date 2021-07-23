import './App.css';
import Header from './Component/Header';
import {Footer} from './Component/Footer';
import Main from './Component/Main';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
