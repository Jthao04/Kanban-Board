import { UserLogin } from "../interfaces/UserLogin";

// Use the environment variable for the API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const login = async (userInfo: UserLogin) => {
  // make a POST request to the login route
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, { // Prepend the base URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
};

export { login };