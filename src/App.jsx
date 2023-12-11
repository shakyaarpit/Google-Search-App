import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SearchResult from "./Components/SearchResult";
import ContextApi from "./Utils/ContextApi";
function App() {
  return (
    <>
      <ContextApi>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/:query/:startIndex"
              exact
              element={<SearchResult />}
            />
          </Routes>
        </BrowserRouter>
      </ContextApi>
    </>
  );
}

export default App;
