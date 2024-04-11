import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AddBookPage from "./pages/AddBookPage"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addbook" element={<AddBookPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
