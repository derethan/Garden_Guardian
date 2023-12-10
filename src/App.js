import './App.css';
import Home from './views/home';

import Header from './components/header';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Header />
      </header>

      <main>
        <Home />
      </main>

    </div>
  );
}

export default App;
