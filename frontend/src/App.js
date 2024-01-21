// App.js

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './page/HomePage';
import { PostDetails } from './page/PostDetails';
import CreateBlog from './component/CreateBlog';
import { Navbar } from './component/Navbar'; // Import the Navbar component

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is outside of the Routes */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PostDetails />} />
        <Route path="/create_blog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
