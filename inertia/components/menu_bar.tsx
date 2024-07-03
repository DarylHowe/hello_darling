import { Link, usePage } from "@inertiajs/react";
import '../css/layout.css';

interface User {
  id: number;
  fullName: string;
  email: string;
}

interface SharedProps {
  user?: User;
  errors?: any;
}

// Todo: Improve styling
//  Show / Hide Registration, Login, Logout based on if user is logged in /
const MenuBar = () => {
  // @ts-ignore
  const { props } = usePage<SharedProps>();
  const { user } = props;

  return (
    <div className="comment-menu-bar">
      <ul>
        {!user && (
          <>
            <li className="menu-item"><Link href="/register">Registration</Link></li>
            <li className="menu-item"><Link href="/login">Login</Link></li>
          </>
        )}

        {user && (
          <>
            <li className="menu-item"><Link href="/books">Books</Link></li>
            <li className="menu-item"><Link href="/book/create">Create Book</Link></li>
            <li className="menu-item"> {user.fullName} </li>
            <li className="menu-item"> {user.email}</li>
            <li className="menu-item"><Link href="/logout">Logout</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default MenuBar;
