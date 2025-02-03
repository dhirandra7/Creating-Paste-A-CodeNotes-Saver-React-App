
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Paste from './Components/Paste';
import ViewPaste from './Components/ViewPaste';
import toast, { Toaster } from 'react-hot-toast';
const router = createBrowserRouter(
[
  {
   path:"/",
   element:
   <div>
    <Navbar />
    <Home />
   </div>
  },
  {
    path:"/Pastes",
    element:
    <div>
     <Navbar />
     <Paste />
    </div>
   },
   {
    path:"/Pastes/:id",
    element:
    <div>
     <Navbar/>
     <ViewPaste/>
    </div>
   },
]);

function App() {
  
   return (
    <div>
      
      <Toaster />
      <RouterProvider router={router}/>
    </div>
   
     
  )
}

export default App
