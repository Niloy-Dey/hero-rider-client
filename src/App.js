import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import SignIn from './Component/Authentication/SignIn';
import SignUp from './Component/Authentication/SignUp';
import RiderSignUp from './Component/Authentication/RiderSignUp';
import LessonLearnerSignUp from './Component/Authentication/LessonLearnerSignUp';
import LessonPackage from './Component/LessonPackage/LessonPackage';
import Dashboard from './Component/Dashboard/Dashboard';
import Profile from './Component/Profile/Profile';
import Payment from './Component/Payment/Payment';

function App() {

  const router = createBrowserRouter([
    {path: "/", element:<Home></Home>},
    {path: "home", element:<Home></Home>},
    {path: "payment/:id", element:<Payment></Payment>},
    {path:"signIn", element: <SignIn></SignIn>},
    {path:"signUp", element: <SignUp></SignUp>},
    {path:"dashboard", element: <Dashboard></Dashboard>},
    {path:"profile", element: <Profile></Profile>},
    {path:"riderSignUp", element: <RiderSignUp></RiderSignUp>},
    {path:"lessonPackage", element: <LessonPackage></LessonPackage>},
    {path:"lessonLearnerSignUp", element: <LessonLearnerSignUp></LessonLearnerSignUp>},
  ])
  return (
    <div >

      <RouterProvider  router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
