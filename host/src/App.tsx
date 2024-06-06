import './App.css';

// @ts-expect-error With module federation we use bundled js files
import Auth from 'auth/Auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// @ts-expect-error With module federation we use bundled js files
import TodoForm from 'todoForm/TodoForm';
// @ts-expect-error With module federation we use bundled js files
import TodoList from 'todoList/TodoList';

import { ROUTES } from './constants';
import { ErrorPage } from './pages/Error.tsx';
import Root from './Root.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.auth,
        element: <Auth />,
      },
      {
        path: ROUTES.todos,
        element: <TodoList />,
      },
      {
        path: ROUTES.createTodo,
        element: <TodoForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
