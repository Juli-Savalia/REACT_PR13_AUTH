import React from "react";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
