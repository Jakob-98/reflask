import React, {  Fragment } from "react";
import { Routes, Route, } from "react-router-dom";

import Header from "./common/Header";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import TestPage from "./testpages/TestPage";


function App() {
  return (
    <>
      <div id="main">
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/test/" element={ <TestPage /> } />
          <Route element={ <PageNotFound />} />
        </Routes>
      </div>
  </>
  );
}

export default App;