import '../styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import Home from './routes/home';
import Login from './routes/Login';
import EditArticles from './routes/editArticles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[{
      path:'/',
      element: <Login></Login>,
    },{
      path:'/home',
      element:<Home></Home>
    },
    {
      path:'/edit-articles',
      element:<EditArticles></EditArticles>
    }
    ],

  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
