import { Route, Routes } from "react-router-dom";
import Arena from "./views/Arena.jsx";
import Shuffle from "./views/Shuffle.jsx";
import Fight from "./views/Fight.jsx";
import Result from "./views/Result.jsx";
import Score from "./views/Score.jsx";
import Start from "./views/Start.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/arena" element={<Arena />}>
          <Route path="/arena/shuffle" element={<Shuffle />} />
          <Route path="/arena/fight" element={<Fight />} />
          <Route path="/arena/result" element={<Result />} />
          <Route path="/arena/score" element={<Score />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
