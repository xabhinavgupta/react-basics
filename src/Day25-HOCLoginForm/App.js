import Login from './Login';
import Logout from './Logout';
import withAuth from './withAuth';

const App = ({ isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <Logout handleLogout={handleLogout} />
      ) : (
        <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default withAuth(App);
