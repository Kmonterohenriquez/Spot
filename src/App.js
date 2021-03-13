import React from 'react'
import './App.sass';
import router from './router'

// Add Component
import Upperline from './components/Upperline';
import Navbar from './components/Navbar';

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
