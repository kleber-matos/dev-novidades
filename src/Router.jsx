import Home from "./pages/Home";
import Preview from "./pages/Preview";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
