import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import ViewPaste from './views/ViewPaste'
import CreatePasteBin from './views/CreatePasteBin'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<CreatePasteBin />} />
                    <Route path="/:id" element={<ViewPaste />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
