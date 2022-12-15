import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Todos" element={<Todos />} />
          <Route path="Todos/:id" element={<Todos />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router