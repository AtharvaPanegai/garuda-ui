export const handleApiError = (error) => {
    if (error.response) {
      console.error(`API Error: ${error.response.data.message || 'Unknown error'}`);
      alert(error.response.data.message || 'Something went wrong!');
    } else if (error.request) {
      console.error('No response received from server');
      alert('Unable to reach the server. Please try again later.');
    } else {
      console.error('Error:', error.message);
      alert('An unexpected error occurred.');
    }
  };
  