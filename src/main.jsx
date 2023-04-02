import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Header from './components/Header/Header';
import FriendAbout from './components/FriendAbout/FriendAbout';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/friends",
        element: <Header></Header>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        
      },
      {
        path: 'friend/:friendId',
        element: <FriendAbout></FriendAbout>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/posts/:postId',
        element: <PostDetail></PostDetail>,
        loader: (params) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }
    ]
    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
