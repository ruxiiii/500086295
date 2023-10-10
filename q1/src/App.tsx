import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NumbersPage from "./numbersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/numbers" element={<NumbersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
