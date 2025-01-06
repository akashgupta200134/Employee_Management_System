

const Headers = ({ loggedInUser, changeUser }) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser'); // Clear user session
    changeUser(); // Notify parent to update state
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white font-medium text-2xl">
        Hello <br />
        <span className="text-3xl font-semibold">
          {loggedInUser?.firstName}👋
        </span>
      </h1>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Headers;
