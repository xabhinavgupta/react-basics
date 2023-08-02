
const Logout = ({ handleLogout }) => {
  return (
    <div>
      <h2>Welcome! You are logged in.</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
