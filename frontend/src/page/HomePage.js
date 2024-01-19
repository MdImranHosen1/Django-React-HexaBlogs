import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar } from '../component/Navbar';

export const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getPosts(); // Call getPosts when the component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Pass an empty dependency array to run the effect only once

  return (
    <div>
      <Navbar/>
      {posts.map((post, index) => (
        <div key={index}>
          {post.title}
          <Link to={`/${post.id}`}>Click</Link>
        </div>
      ))}
    </div>
  );
};
