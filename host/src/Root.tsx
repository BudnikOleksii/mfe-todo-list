import { Link, Outlet } from 'react-router-dom';

import { ROUTES } from './constants';

export default function Root() {
  return (
    <div id="detail">
      <nav>
        <Link to={ROUTES.auth}>Auth</Link>
        <Link to={ROUTES.todos}>Todos</Link>
        <Link to={ROUTES.createTodo}>Create todo</Link>
      </nav>

      <Outlet />
    </div>
  );
}
