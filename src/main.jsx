import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AuthProvider from './Providers/AuthProvider.jsx';
import LoginPage from './Auth/Login.jsx';
import SignUpSection from './Auth/SignUp.jsx';
import HomeLayout from './LayOuts/HomeLayout.jsx';
import Error from './Components/error.jsx';
// import PrivetRout from './Privet/Privetrought.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path:"/",
        element:<div>hdfssssssssss</div>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/signUp',
        element: <SignUpSection></SignUpSection>
      },
    ]
  },

  // {
  //   path: "/news/:id",
  //   // loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  //   element: <PrivetRout></PrivetRout>
  // },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
