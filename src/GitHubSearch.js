import React, { useState } from 'react';
import "./GitHubSearch.css"



const GitHubSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a request to the GitHub API
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Not Found') {
          setError('User not found');
          setUserData(null);
        } else {
          setError(null);
          setUserData(data);
        }
      })
      .catch((error) => {
        setError('Error fetching data');
        setUserData(null);
      });
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          id='total'
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <br/>
        <a href="/"><button type='submit' id='buttoncenter' class="bn29">Search</button></a>
      </form>

      {error && <p>{error}</p>}

      {userData && (
        <div id='result'>
          <div>
          <h2>{userData.login}</h2>
          <p>Name: {userData.name}</p>
          <p>Bio: {userData.bio}</p>
          <p>Public Repos: {userData.public_repos}</p>
          </div>
          <img height={150} src={userData.avatar_url} alt={userData.name}/>
        </div>
      )}
    </div>
  );
};

export default GitHubSearch;
