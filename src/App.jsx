import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutkravmaga from "./pages/Aboutkravmaga";
import Training from "./pages/Training";
import Instructor from "./pages/Instructor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutKrav-maga" element={<Aboutkravmaga />} />
      <Route path="/training" element={<Training />} />
      <Route path="/instructor" element={<Instructor />} />
    </Routes>
  );
}

export default App;
