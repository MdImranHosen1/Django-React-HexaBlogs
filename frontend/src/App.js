
import './App.css';
import { HomePage } from './page/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostDetails } from './page/PostDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PostDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
