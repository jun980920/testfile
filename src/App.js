import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Tailwind 스타일을 import하는 css 파일
import NewPage from './NewPage'; // 새로운 페이지를 가져옵니다.

function App() {
  return (
    <Router>
      <div className="App">
        <header className=" bg-gray-800 text-white  max-h-[50px]">
          <nav className="flex space-x-4">
            <Link to="/" className="text-blue-400 hover:text-blue-200">Home</Link>
            <Link to="/newpage" className="text-blue-400 hover:text-blue-200">New Page</Link>
          </nav>
        </header>

        <main className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <img src="logo.svg" className="App-logo mx-auto mb-4" alt="logo" />
                  <p className="text-lg">
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link text-blue-500 hover:text-blue-300"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </div>
              }
            />
            <Route path="/newpage" element={<NewPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;