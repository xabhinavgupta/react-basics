// withAuth.js (Higher Order Component)
import  { useState } from 'react';

const withAuth = (WrappedComponent) => {
  const WithAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
    };

    return (
      <WrappedComponent
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    );
  };

  return WithAuth;
};

export default withAuth;
