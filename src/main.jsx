import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AuthProvider from './Providers/AuthProvider.jsx';
import LoginPage from './Auth/Login.jsx';
import SignUpSection from './Auth/SignUp.jsx';
import HomeLayout from './LayOuts/HomeLayout.jsx';
import Error from './Components/error.jsx';
import HomePage from './LayOuts/HomePage.jsx';
import PrivetRout from './Privet/Privetrought.jsx';
import DashBoard from './LayOuts/DashBoard.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Lesson from './LayOuts/Lesson.jsx';
import WordToShow from './Components/WordToShow.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/signUp',
        element: <SignUpSection></SignUpSection>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/tutorials',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/lesson',
        element: <Lesson></Lesson>
      },
      {
        path: '/lesson/:lesson_no',
        loader: (() => fetch('/Words.json')),
        element: <PrivetRout><WordToShow></WordToShow></PrivetRout>
      },
      {
        path: '/dashboard',
        element: <PrivetRout><DashBoard></DashBoard></PrivetRout>
      },

    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
