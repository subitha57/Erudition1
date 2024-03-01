export const logout = async () => {
    try {
      const response = await fetch(' https://o-auth-2-0.onrender.com/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers like authentication tokens here
        },
      });
  
      if (response.ok) {
        // Successfully logged out
        return true;
      } else {
        // Handle error cases
        return false;
      }
    } catch (error) {
      // Handle network errors
      console.error('Logout request failed:', error);
      return false;
    }
  };