
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const App =() => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" pageSize={pageSize} category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" country="in" pageSize={pageSize} category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" pageSize={pageSize} category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" pageSize={pageSize} category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" country="in" pageSize={pageSize} category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" country="in" pageSize={pageSize} category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" pageSize={pageSize} category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" pageSize={pageSize} category="technology" />}></Route>
          </Routes>
          <ScrollToTop smooth color="#f11946" />

        </Router>
      </div>
    )
}

export default App
