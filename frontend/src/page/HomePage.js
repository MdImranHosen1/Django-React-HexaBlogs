import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BlogCard } from '../component/BlogCard';

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

      <div className='flex flex-wrap'>
        {posts.map((post, index) => {
          console.log(post); // Add this line for debugging
          return (
            <div key={index} className='w-1/2'>
              
             <BlogCard post={post}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
