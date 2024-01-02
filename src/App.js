import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Componants/Layout/Layout';
import Home from './Componants/Home/Home';
import Notfound from './Componants/Notfound/Notfound';
import About from './Componants/About/About';
import Services from './Componants/Services/Services';
import Projects from './Componants/Projects/Projects';
import Contacts from './Componants/Contacts/Contacts';

function App() {
  
  const myrouter = createHashRouter([
    {
      path: "/", element: <Layout />, children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "projects", element: <Projects /> },
        { path: "contacts", element: <Contacts /> },
        
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return <>
  
  <RouterProvider router={myrouter} />
  
  </>
}

export default App;
