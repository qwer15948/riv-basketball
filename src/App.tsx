import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <MainPage />
      </div>
    </RecoilRoot>
  );
}

export default App;
