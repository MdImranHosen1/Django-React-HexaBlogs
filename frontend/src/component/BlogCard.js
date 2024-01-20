import React from 'react';

export const BlogCard = (props) => {
  return (
    <section className="bg-white">
      <div className="py-4 px-2  mx-auto max-w-screen-xl lg:py-4 lg:px-4">
        <div className="grid gap-8">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md  ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Tutorial
              </span>
              <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900"><a href="#">{props.post.title}</a></h2>
            <p className="mb-5 font-sans text-sm text-gray-700 ">{props.post.content.slice(0,250)}<bold>...continue</bold></p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                <span className="font-medium">
                  Jese Leos
                </span>
              </div>
              <a href="#" className="inline-flex items-center font-medium text-primary-600 text-gray-700 hover:underline hover:text-gray-800">
                Read more
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
