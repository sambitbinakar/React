import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/Home/About.jsx'
import Contact from './component/Home/Contact.jsx'
import User from './component/Home/User.jsx'
import Github, { infoLoader } from './component/Github.jsx'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout/>,
//         children: [
//             {
//                 path:'',
//                 element:<Home/>
//             },
//             {
//                 path:'about',
//                 element:<About/>
//             },
//             {
//                 path:'contact',
//                 element:<Contact/>
//             }
//         ]
//     }
// ])

const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/User/:userid' element={<User/>}/>
            <Route 
            loader={infoLoader}
            path='/github' element={<Github/>}/>
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
)
