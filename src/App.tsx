import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import renderRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes()}</Routes>
    </BrowserRouter>
  );
}

export default App;
