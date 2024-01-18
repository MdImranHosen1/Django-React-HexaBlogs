import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const PostDetails = () => {
  const [post, setPost] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/${id}/`);
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getPost(); // Call getPost when the component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Pass [id] as a dependency to run the effect when id changes

  return <>{post && <div>{post.title}</div>}</>;
};
