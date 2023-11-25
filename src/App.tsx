import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layer from "./pages/Layer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layer" element={<Layer />} />
      </Routes>
    </Router>
  );
}

export default App;
