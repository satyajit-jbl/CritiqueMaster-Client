import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Errorpage";
import AddServices from "../pages/Services/AddService";
import AddService from "../pages/Services/AddService";
import MyServices from "../pages/Services/MyServices";
import UpdateService from "../pages/Services/UpdateService";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Route not found</h2>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'services',
            element: <Services></Services>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'add-service',
            element: <AddService></AddService>
        },
        {
            path: 'my-services',
            element: <MyServices></MyServices>
        },
        {
            path: 'update/:id',
            element: <UpdateService></UpdateService>
        },
        
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;