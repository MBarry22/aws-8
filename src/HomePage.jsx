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
    <div className="min-h-screen  flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl font-bold mb-6 text-purple-900">Home Page</h1>
      <div className="text-center">
        {user && (
          <>
            <p className="text-lg mb-4 text-purple-900">Hello there, {user.username}!</p>
            <button onClick={signOut} className="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Out
            </button>
          </>
        )}
        {!user && (
          <p className="text-lg text-purple-900">
            You're not signed in yet. Please <a href="/login" className="text-purple-900 underline hover:text-purple-700">sign in</a> or <a href="/signup" className="text-purple-900 underline hover:text-purple-700">create an account</a>.
          </p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
