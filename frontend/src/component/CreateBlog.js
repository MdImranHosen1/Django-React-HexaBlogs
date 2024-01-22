import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const initBlogData = {
    title: '',
    description: '',
    published_date: null,
    edit_date: null,
    is_published: false,
};

export default function CreateBlog() {
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
    ];
    const module = {
        toolbar: toolbarOptions,
    };

    const [blogData, setBlogData] = useState(initBlogData);
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };

    const postBlogClickHandle = async () => {
        const storedAuthState = localStorage.getItem('authState');
        const responseObject = JSON.parse(storedAuthState);
        const userData = responseObject.userData;

        // Set the published_date to the current time
        const currentDateTime = new Date().toISOString();

        const newBlogData = {
            title: blogData.title,
            description: value,
            author: userData.username,
            published_date: currentDateTime,
            edit_date: null,
            is_published: false,
        };

        try {
            // Make a POST request to your DRF backend API endpoint
            const response = await axios.post('http://127.0.0.1:8000/create_post/', newBlogData, {
                // headers: {
                //     'Authorization': `Bearer ${yourAuthToken}`, // Include your authentication token
                //     'Content-Type': 'application/json',
                // },
            });

            // Handle the response as needed
            console.log('Blog post created successfully:', response.data);

            // Optionally, reset the form or perform other actions after a successful post
            setBlogData(initBlogData);
            setValue('');
        } catch (error) {
            // Handle any errors that occurred during the POST request
            console.error('Error posting blog:', error.message);
        }
    };

    // useEffect to log the updated blogData after the state has been updated
    useEffect(() => {
        console.log('Updated blogData:', blogData);
    }, [blogData]);

    return (
        <div className='w-full p-4'>
            <form className=' '>
                <div className='mb-5'>
                    <label
                        htmlFor='Title'
                        className='block mb-2 text-sm font-medium text-gray-900 '
                    >
                        Title
                    </label>
                    <input
                        type='text'
                        id='large-input'
                        value={blogData.title}
                        name='title'
                        onChange={handleChange}
                        className='block w-full p-4 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div>
                    <label
                        htmlFor='description'
                        className='block mb-2 text-sm font-medium text-gray-900 '
                    >
                        Description
                    </label>
                    <div>
                        <div className='h-80'>
                            <ReactQuill
                                className=' h-full '
                                modules={module}
                                theme='snow'
                                value={value}
                                onChange={setValue}
                            />
                        </div>
                        <div className='mt-20 flex justify-center'>
                            <button
                                type='button'
                                className='py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-gray-400 rounded-md border border-gray-900 hover:bg-gray-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 '
                                onClick={postBlogClickHandle}
                            >
                                Post Blog
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
