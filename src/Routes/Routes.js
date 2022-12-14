import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllBuyer from '../Dashboard/Admin/AllBuyer/AllBuyer';
import AllSeller from '../Dashboard/Admin/AllSeller/AllSeller';
import ReportedItems from '../Dashboard/Admin/ReportedItems/ReportedItems';
import MyOrder from '../Dashboard/Buyer/MyOrders/MyOrder';
import Payment from '../Dashboard/Payment/Payment';
import AddAProducts from '../Dashboard/Seller/AddAProduct/AddAProducts';
import MyProducts from '../Dashboard/Seller/MyProducts/MyProducts';
import DisplayError from '../DisplayError/DisplayError';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home/Home';
import Mobiles from '../pages/Home/Home/Mobiles';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import AdminRoute from '../PrivateRoute/AdminRoute';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <Mobiles></Mobiles>,
                loader: ({ params }) => fetch(`https://mobile-resale-server-seven.vercel.app/catmobiles/${params.id}`)

            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProducts></AddAProducts>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://mobile-resale-server-seven.vercel.app/booking/${params.id}`)

            }

        ]
    }


])


export default router;