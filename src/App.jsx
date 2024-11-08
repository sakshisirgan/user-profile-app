import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  // Fetch users from the API
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
        setLoading(false);  // Stop loading after data is fetched
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);  // Stop loading if there's an error
      });
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>UI View - Users Profile v1</h1>
      </header>
      <section>
        <h2>User Profiles</h2>

        {/* Loading Indicator */}
        {loading && <div className="spinner"></div>}

        {/* Error Message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* User Grid */}
        {!loading && !error && (
          <div className="user-grid">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
