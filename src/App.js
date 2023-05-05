
import './App.css';
import HeaderApp from './components/HeaderApp';
import MainApp from './components/MainApp';
import FooterApp from './components/FooterApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderApp/>
      </header>

      <main>
        <MainApp/>
        
      </main>

      <footer>
        <FooterApp/>
      </footer>
    </div>
  );
}

export default App;
