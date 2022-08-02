import { BrowserRouter } from 'react-router-dom';
import Views from './Layouts/Views';
import './Sass/style.css';
import './api'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Views/>
      </BrowserRouter>
    </div>
  );
}

export default App;
