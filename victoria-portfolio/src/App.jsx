import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MessageMe from "./pages/MessageMe";
import Skills from "./pages/Skills";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="bg-[#000000]">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<MessageMe />} path="/message-me" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<About />} path="/about" />
        </Routes>
      </div>
    </>
  );
}

export default App;
