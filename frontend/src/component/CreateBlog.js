import React, { useState } from 'react'
import QuillFrom from './QuillFrom'

const initBlogData = {
    title: "",
    description: "",
    author: null,
    published_date: null,
    edit_date: null,
    is_published: false
}

export default function CreateBlog() {

    const [blogData, setBlogData] = useState(initBlogData)

    const [fromText, setFromText] = useState("")

    const postBlogClickHandle = () => {

        setBlogData = {
            title: "",
            description: fromText,
            author: null,
            published_date: null,
            edit_date: null,
            is_published: false
        }

    }

    return (
        <div className='w-full p-4'>

            <form className=" ">
                <div className="mb-5">
                    <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <QuillFrom setFromText={setFromText}></QuillFrom>
                </div>
            </form>



        </div>
    )
}
