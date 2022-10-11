
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Main from './Layouts/Main';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import ImageHeader from './Components/ImageHeader/ImageHeader';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children:[
        {path: '/', element: <ImageHeader></ImageHeader>},
        {path: '/topics', element: <Topics></Topics>},
        {path:'/statistics', element: <Statistics></Statistics>},
        {path: '/blog', element: <Blog></Blog>}
    ]}

  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
