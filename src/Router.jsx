import Home from "./pages/Home";
import Preview from "./pages/Preview";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
