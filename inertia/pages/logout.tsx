import '../css/Logout.css';
import {router} from "@inertiajs/react";
import Layout from "~/components/layout";

const Logout = () => {

  const handleLogoutClick = () => {
    console.log('Logout button clicked');
    router.post('/logout')
  };

  return (
    <Layout>
      <div className="logout-container">
        <h1>Log Out</h1>
        <button onClick={handleLogoutClick} className="logout-button">
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default Logout;
