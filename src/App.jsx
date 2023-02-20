import Dashboard from "./Dashboard.jsx"
import './App.css'

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/*'} element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
