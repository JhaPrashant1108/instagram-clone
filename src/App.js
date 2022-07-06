import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Routers from './routes/Routers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
