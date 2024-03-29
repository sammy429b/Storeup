import Navbar from './components/Navbar'
import App_Layout from './layout/app'
import Page_Not_Found from './pages/404';
import Category from './pages/Category';
import Index from './pages/Index'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

const Routerapp = createBrowserRouter([
  {
      element : <App_Layout />,
      children: [
        {
          path: "/",
          element: <Index/>,
        },
        {
          path: "/:category",
          element: <Category/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
        }
      ],
    },
    {
      path: "/*",
      element: <Page_Not_Found/>,
    },
  ]);

function App() {
  return (
    <>
    <RouterProvider router={Routerapp} >
      <Navbar />
      <App_Layout>
        <Index /> 
      </App_Layout>
    </RouterProvider>    
    </>
  )
}

export default App