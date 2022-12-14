import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Main from './Layouts/Main';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import LandingPage from './Components/LandingPage/LandingPage';
import NotFound from './Components/NotFound/NotFound';
import QuizDetail from './Components/QuizDetail/QuizDetail';


function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children:[
        {path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },  
          element: <LandingPage></LandingPage>},
        {path: '/topics',
            loader: async () => {
              return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element: <Topics></Topics>},
        {path:'/statistics', 
            loader: async () => {
              return fetch('https://openapi.programming-hero.com/api/quiz')
            },  
            element: <Statistics></Statistics>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/quizTopic/:quizId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<QuizDetail></QuizDetail>}
    ]},
    
    {path: '*', element:<NotFound></NotFound>}

  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
