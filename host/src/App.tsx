import './App.css';

// @ts-expect-error With module federation we use bundled js files
import Auth from 'auth/Auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// @ts-expect-error With module federation we use bundled js files
import TodoForm from 'todoForm/TodoForm';
// @ts-expect-error With module federation we use bundled js files
import TodoList from 'todoList/TodoList';

import { ErrorPage } from './pages/Error.tsx';
import { Home } from './pages/Home.tsx';
import Root from './Root.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Auth />,
      },
      {
        path: '/todos',
        element: <TodoList />,
      },
      {
        path: '/todos/create',
        element: <TodoForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
