import React from 'react'
import './App.css';
import router from './router'

// Add Component
import Upperline from './component/Home/Upperline/Upperline';
import Navbar from './component/Home/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Upperline />
				<Navbar />
        { router }

    </div>
  );
}

export default App;
