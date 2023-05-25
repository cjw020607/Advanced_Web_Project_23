
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { NewsPage } from "./pages/NewsPage";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage />
        }
      />
      <Route
        path="/tag"
        element={
          <NewsPage />
        }
      />


    </Routes>
  );
}

export default App;
