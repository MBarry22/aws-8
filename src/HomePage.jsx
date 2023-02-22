import { useState, useEffect } from 'react';
import * as cognito from './cognito';

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = cognito.getCurrentUser();
    setUser(user);
  }, []);

  const signOut = () => {
    cognito.signOut();
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl font-bold mb-6">Home Page</h1>
      <div className="text-center">
        {user && (
          <>
            <p className="text-lg mb-4">Hello there, {user.username}!</p>
            <button onClick={signOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Out
            </button>
          </>
        )}
        {!user && (
          <p className="text-lg">
            You're not signed in yet. Please <a href="/login" className="text-blue-500">sign in</a> or <a href="/signup" className="text-blue-500">create an account</a>.
          </p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
