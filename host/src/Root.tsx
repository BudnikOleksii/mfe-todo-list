import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div id="detail">
      <Link to={'/home'}>Home</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/todos'}>Todos</Link>
      <Link to={'/todos/create'}>Creat todo</Link>
      <Outlet />
    </div>
  );
}
