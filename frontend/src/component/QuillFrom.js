import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function QuillFrom(props) {
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];
    const module = {
        toolbar: toolbarOptions,
    }


    const [value, setValue] = useState('');

    const setAllValue = () => {
        props.setFromText(value);
    }
 

    return (
        <div>
            <div className='h-80'>
                <ReactQuill className=' h-full ' modules={module} theme="snow" value={value} onChange={setValue} />
            </div>
            <div className='mt-20 flex justify-center'>
                <button type="button" className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-gray-400 rounded-md border border-gray-900 hover:bg-gray-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 " onClick={ setAllValue}>Post Blog</button>
            </div>
        </div>
    );
}
