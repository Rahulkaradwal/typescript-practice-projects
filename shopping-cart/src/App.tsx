import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
