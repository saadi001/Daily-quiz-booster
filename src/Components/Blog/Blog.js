import React from 'react';

const Blog = () => {
     return (
          <div className='max-w-[1366px] mx-auto mt-8 mb-10'>
               <div className='w-5/6 mx-auto'>
                    <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                         <h3 className='text-lg font-bold'>Question 1: What does the purpose of react router?</h3>
                         <p className='mb-2'><span className='font-bold'>Answer:</span> React Router enables "client side routing".</p>
                         <p className='mb-2'>In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.</p>
                         <p className='mb-2'>Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.</p>
                    </div>
                    <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                         <h3 className='text-lg font-bold'>Question 2: How does context API works?</h3>
                         <p className='mb-2'><span className='font-bold'>Answer:</span> Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
                         <p className='mb-2'>createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                    </div>
                    <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                         <h3 className='text-lg font-bold'>Question 3: What is useRef hook in react?</h3>
                         <p><span className='font-bold'>Answer:</span>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.</p>
                         <code>declare function useHref(
                              to: To,
                              options?: relative ?: RelativeRoutingType
                              ): string;</code>
                    </div>

               </div>
          </div>
     );
};

export default Blog;