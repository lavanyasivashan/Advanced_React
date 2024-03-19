import './App.css';

import Dashboard from '../src/pages/dashboard'; 


import{
  createBrowserRouter,
  RouterProvider, 
}from 'react-router-dom'
import Featured from './pages/featured';
import Login from './pages/login';
import Register from './pages/register';
import Hero from './pages/hero';



const router = createBrowserRouter([
  {
    path:'/',
    element:<div><Login/></div>
  },
  {
    path:'/register',
    element:<div><Register/></div>
  },
  
  {
    path:'/home',
    element:<div><Hero/></div>
  },
  {
    path:'/f',
    element:<div><Featured/></div>
  },
  
  

])


function App() {

  return (
    <>
      <div>
       <RouterProvider router={router}/>
         </div>
    </>
  )
}

export default App;