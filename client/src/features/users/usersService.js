import axios from 'axios';

const API_URL = 'http://localhost:4001/api/users/';

const fetchallusers = async (token) => {
  const config = {
    headers: {
      token: token,
    },
  };

  const response = await axios.get(API_URL, config);
  response.data.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
  console.log(response.data);
  return response.data;
};

const edituserdetails = async (token, user_data) => {
  const config = {
    headers: {
      token: token,
    },
  };

  const response = await axios.put(
    API_URL + user_data.user_id,
    user_data,
    config
  );
  // console.log(response);
};

const deleteuser = async (token, id) => {
  const config = {
    headers: {
      token: token,
    },
  };

  const response = await axios.delete(API_URL + id, config);
  console.log(response);
};

const usersService = {
  fetchallusers,
  edituserdetails,
};

export default usersService;