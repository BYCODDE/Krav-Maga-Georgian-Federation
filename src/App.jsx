import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutkravmaga from "./pages/Aboutkravmaga";
import Training from "./pages/Training";
import Instructor from "./pages/Instructor";

// import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutKrav-maga" element={<Aboutkravmaga />} />
      <Route path="/training" element={<Training />} />
      <Route path="/instructor" element={<Instructor />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
