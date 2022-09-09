import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageRenderer from "./page-renderer";
import Navigation from "./components/navigation";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/:page" element={<PageRenderer />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
